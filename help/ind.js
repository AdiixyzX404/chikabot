exports.wait = () => {
    return `⏳ Mohon tunggu sebentar~`
}

exports.ok = () => {
    return `✅ Done. Ok desu~`
}

exports.err = () => {
    return `‼️Fitur Sedang Error‼️

⏳Sedang melapor fitur error ke owner⏳`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ‼️ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `⚠️ Harap masukkan pesan yang ingin disampaikan! ⚠️`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar ❎`
}

exports.ownerOnly = () => {
    return `⚠️ Command ini khusus Owner-adyy! ⚠️`
}

exports.doneOwner = () => {
    return `✔  ️Sudah selesai, Owner-adyy~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `⚠️ Tidak  dapat mem-promote user yang merupakan admin! ⚠️`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `_Selamat ${salam} ${pushname}*_

_Library : baileys-md_
_Time Server : ${time}_
_Creator : wa.me/60199782326_
_Script : github.com/rashidsiregar28/chikabot_

*INFO*
${prefix}owner
${prefix}rules
${prefix}donate

*OWNER*
>
$ exec
${prefix}join
${prefix}setppbot (tag/send image)

*GROUP*
${prefix}revoke
${prefix}leave
${prefix}group open/close
${prefix}tagall text
${prefix}hidetag text

*ANIME*
${prefix}anime query
${prefix}manga query
${prefix}character query

*MISC*
${prefix}film query
${prefix}wattpad query
${prefix}webtoons query
${prefix}drakor query
${prefix}pinterest query

*MEDIA*
${prefix}toimg (tag sticker)

*DOWNLOADER* 
${prefix}tiktok link
${prefix}ytdl link
${prefix}ytmp3 link
${prefix}ytmp4 link
${prefix}ytdl link
${prefix}facebook link
${prefix}twitter link
${prefix}instagram link

*THANKS*
Rashid Siregar
Xfarr api
Baileys#multi-device
and all support

    `
}

exports.rules = (prefix) => {
    return `
*RULES*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

*FAQS*
🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


    `
}

exports.tos = (ownerNumber, prefix) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 08127668234 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownerNumber} (Owner)

    `
}
