export function getCollections (narrative) {
    return {
        type:'GET_COLLECTIONS',
        narrative,
    }
}

export function getNarratives () {
    return {
        type:'GET_NARRATIVES',
    }
}