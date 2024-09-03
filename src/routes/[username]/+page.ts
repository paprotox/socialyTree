import { collection, limit, query, where} from 'firebase/firestore';
import type { PageLoad } from './$types';
import { db } from '$lib/firebase';
import { getDocs } from 'firebase/firestore';
import { error } from '@sveltejs/kit';

/**
 * @function that use that username.value to fetch date
 * from firestore for that user to display it in UI
 */
export const load = (async ({ params }) => {

    const collectionRef = collection(db, "users");

    /**
     * @query looking for username that's equal
     * to params.username in url
     */
    const q = query(
        collectionRef,
        where("username", "==", params.username),
        limit(1)
    );
    const snapshot = await getDocs(q); //return array of document's snapshots
    const exists = snapshot.docs[0]?.exists();
    const data = snapshot.docs[0]?.data();

    if (!exists) {
        throw error(404, "that user does not exists");
    }

    if (!data.published) {
        throw error(403, `The profile of @${data.username} is not public!`)
    }

    return {
        username: data.username,
        photoURL: data.photoURL,
        bio: data.bio,
        links: data.links ?? []
    }
}) satisfies PageLoad;