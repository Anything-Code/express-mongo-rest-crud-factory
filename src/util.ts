export type Maybe<T> = T | null;
export type BinaryTuple<T, U> = [T, U];

export async function usePromise<T>(promise: Promise<T>): Promise<BinaryTuple<Maybe<T>, Maybe<unknown>>> {
    try {
        const res = await promise;
        return [res, null];
    } catch (error) {
        return [null, error];
    }
}
