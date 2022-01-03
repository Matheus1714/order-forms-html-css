const generateAlphabeticByGroup = (s) => {
    let title = s.match(/\[\w.+\]/g)
    let obs = [...s.matchAll(/^[oO][bB][sS](\d+)?:?\s?\w+.*/gm)].map(e => e[0])
    let flags = [...s.matchAll(/\w{3}-\d{2}/gm)].map(e => e[0])
    let idxFlags = [...s.matchAll(/\w{3}-\d{2}/gm)].map(e => e.index)
    let groups = [s.slice(idxFlags[0], idxFlags[1]), s.slice(idxFlags[1], idxFlags[2]), s.slice(idxFlags[2], s.length - 1)]
    groups = groups.map(txt => [...txt.matchAll(/^-(\s?)\w+.*/gm)].map(e => e[0].replace(/^-(\s+)?/gm, "")).sort())
    let newS = `${title || ""}\n\n`;

    if(obs.length !== 0){
        for(let i = 0; i < obs.length; i++){
            newS += `${obs[i]}\n`;
        }
    }

    for (let i = 0; i < flags.length; i++) {
        newS += `${flags[i]}\n`;
        for (let j = 0; j < groups[i].length; j++) {
            newS += `- ${groups[i][j]}\n`;
        }
        newS += `\n`;
    }
    return newS;
};