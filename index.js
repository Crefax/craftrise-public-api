const axios = require('axios').default
const cheerio = require('cheerio')

module.exports = {
    Sorgu: async function oyuncuSorgula(username) {
        try {
            var fre = []
            var fre2 = []
            var fre3 = []
            const siteUrl = `https://craftrise.com.tr/oyuncu/${username}`
            const { data } = await axios({
                method: "GET",
                url: siteUrl,
            })
            const $ = cheerio.load(data)
            var nick = $(`div[class="profileTitle-generalInformation"] > p`).text().trim()
            var rank = $(`div[class="rankButton"] > p`)
            var argsRank = rank.toString().replace('<p>', ' ').replace('</p>', ` `).replace('<p>', '').replace('</p>', '').replace('<p', '').replace('class="rainbow rainbow_text_animated">', '').trim().split(/ +/)
            $(`div[class="rankButton socialMedia"]`).each((i, title) => {
                fre += `${$(title).attr('title')} `
            })
    
            $(`div[class="rankButton"]`).each((i, title) => {
                fre2 += `${$(title).attr('title')} `
            })

            $(`div[class="riseStats"] > p`).each((i, title) => {
                fre3 += `${$(title)}`
            })

            var argsStatus = fre.toString().trim().split(/ +/)
            var argsStatusLength = argsStatus.length
            var TP = fre2.toString().replaceAll('<b>', '').replaceAll('</br>', '').replaceAll('</b>', '').replaceAll('<br>', '').trim().split(/ +/)
            var games = fre3.toString().replaceAll(`<p style="text-align:center; font-family: 'Mikado-Medium'; margin-top: -40px;">`, '').replaceAll('</br>', '').replaceAll('</p>', '').replaceAll('win', 'win ').trim().split(/ +/)

            var Obj = {
                "username": nick,
                "status": argsStatus[argsStatusLength - 1],
                "tag": argsRank[0],
                "rank": `${argsRank[1]} ${argsRank[2]}`,
                "totalxp": TP[6],
                "nextlevelxp": TP[9],
                "head": `https://www.craftrise.com.tr/gets/get-head.php?s=256&u=${username}`,
                "herobrine_chamber_point": `${games[0]}`,
                "herobrinechamber_win": `${games[2]}`,
                "speedbuilders_point": `${games[4]}`,
                "speedbuilders_win": `${games[6]}`,
                "survivalgames_point": `${games[8]}`,
                "survivalgames_win": `${games[10]}`,
                "uhcmeetup_point": `${games[12]}`,
                "uhcmeetup_win": `${games[14]}`,
                "buildbattle_point": `${games[16]}`,
                "buildbattle_win": `${games[18]}`,
                "thebridge_point": `${games[20]}`,
                "thebridge_win": `${games[22]}`,
                "bedwars_point": `${games[24]}`,
                "bedwars_win": `${games[26]}`,
                "dragonescape_point": `${games[28]}`,
                "dragonescape_win": `${games[30]}`,
                "tntrun_point": `${games[32]}`,
                "tntrun_win": `${games[34]}`,
                "eggwars_point": `${games[36]}`,
                "eggwars_win": `${games[38]}`,
                "turfwars_point": `${games[40]}`,
                "turfwars_win": `${games[42]}`,
                "arenapvp_point": `${games[44]}`,
                "arenapvp_win": `${games[46]}`,
                "oitc_point": `${games[48]}`,
                "oitc_win": `${games[50]}`,
                "bomblobbers_point": `${games[52]}`,
                "bomblobbers_win": `${games[54]}`,
                "katilkim_point": `${games[56]}`,
                "katilkim_win": `${games[58]}`,
                "skywars_point": `${games[60]}`,
                "skywars_win": `${games[62]}`
            };
            return Obj;
        } catch (err) {
            console.log(err)
        }
    }
}
