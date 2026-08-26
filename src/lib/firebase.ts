import { type FirebaseApp, initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  type Auth,
  type User,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit as firestoreLimit,
  serverTimestamp,
  type Firestore,
  type DocumentData,
  type QueryConstraint,
} from "firebase/firestore";

// ── Lazy Firebase Init ─────────────────────────────
// Only initializes when first accessed, so public pages never crash.

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

function getApp(): FirebaseApp {
  if (_app) return _app;

  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  if (!apiKey) {
    console.warn(
      "[Envo Peace] Firebase is not configured. Admin features are disabled.\n" +
      "Add VITE_FIREBASE_* env vars to .env.local to enable the admin portal."
    );
    // Return a dummy app reference — the admin page will show a config-missing message
    throw new Error(
      "Firebase is not configured. Please set VITE_FIREBASE_* environment variables."
    );
  }

  const firebaseConfig = {
    apiKey,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string,
    appId: import.meta.env.VITE_FIREBASE_APP_ID as string,
  };
  _app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  return _app;
}

export function getFirebaseAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getApp());
  return _auth;
}

export function getFirebaseDb(): Firestore {
  if (_db) return _db;
  _db = getFirestore(getApp());
  return _db;
}

// ── Auth Helpers ───────────────────────────────────

export async function signIn(email: string, password: string) {
  return signInWithEmailAndPassword(getFirebaseAuth(), email, password);
}

export async function signOut() {
  return firebaseSignOut(getFirebaseAuth());
}

export function subscribeToAuth(callback: (user: User | null) => void) {
  return onAuthStateChanged(getFirebaseAuth(), callback);
}

export type { User };

// ── Firestore Helpers ──────────────────────────────

export async function fetchCollection<T = DocumentData>(
  collectionName: string,
  ...constraints: QueryConstraint[]
): Promise<(T & { id: string })[]> {
  const db = getFirebaseDb();
  const q = query(collection(db, collectionName), ...constraints);
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as T & { id: string }));
}

export async function fetchDoc<T = DocumentData>(
  collectionName: string,
  docId: string,
): Promise<(T & { id: string }) | null> {
  const db = getFirebaseDb();
  const snap = await getDoc(doc(db, collectionName, docId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as T & { id: string };
}

export async function addDocument(collectionName: string, data: DocumentData) {
  const db = getFirebaseDb();
  return addDoc(collection(db, collectionName), {
    ...data,
    created_at: serverTimestamp(),
    updated_at: serverTimestamp(),
  });
}

export async function updateDocument(
  collectionName: string,
  docId: string,
  data: Partial<DocumentData>,
) {
  const db = getFirebaseDb();
  return updateDoc(doc(db, collectionName, docId), {
    ...data,
    updated_at: serverTimestamp(),
  });
}

export async function deleteDocument(collectionName: string, docId: string) {
  const db = getFirebaseDb();
  return deleteDoc(doc(db, collectionName, docId));
}

// Re-export commonly used Firestore utilities
export {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  firestoreLimit as limit,
  serverTimestamp,
  type QueryConstraint,
  type DocumentData,
};
