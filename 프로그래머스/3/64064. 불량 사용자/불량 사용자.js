function isMatching(userId, bannedId) {
    if (userId.length !== bannedId.length) return false;  

    for (let i = 0; i < bannedId.length; i++) {
        if (bannedId[i] !== '*' && userId[i] !== bannedId[i]) {
            return false;
        }
    }
    return true;
}

function solution(user_id, banned_id) {
    let resultSet = new Set();  

    function dfs(bannedIdx, selected) {
        if (bannedIdx === banned_id.length) {
            resultSet.add([...selected].sort().join(','));
            return;
        }

        let currentBanned = banned_id[bannedIdx];

        for (let i = 0; i < user_id.length; i++) {
            if (!selected.has(user_id[i]) && isMatching(user_id[i], currentBanned)) {
                selected.add(user_id[i]);  
                dfs(bannedIdx + 1, selected); 
                selected.delete(user_id[i]);  
            }
        }
    }

    dfs(0, new Set());

    return resultSet.size;  
}