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

export function changeNarrative (e) {
    const narrative = e.target.value
    
    return {
        type:'CHANGE_NARRATIVE',
        narrative
    }
}