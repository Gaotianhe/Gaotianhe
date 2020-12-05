const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return ` ${progressBar} `
}

const readme = `
<h2>Hi, I'm Jimgao 👋👨‍💻</h2>

Annual balance   ${progressBarOfThisYear}  ${(progressOfThisYear * 100).toFixed(2)} %

\`\`\`python
def teach_yourself(anything):
    while not create():
        learn()
        practice()
    return teach_yourself(another)

teach_yourself(coding)
\`\`\`

<img align="right" src="https://tianheg-readme-stats.vercel.app/api?username=tianheg&show_icons=true&theme=dark" />

- ⚡ JavaScript / Python . Vue.
- 🔑 GPG key hosted here at [GitHub](https://github.com/tianheg.gpg) and also [Keybase](https://keybase.io/yidajiabei/pgp_keys.asc), see [Keybase proof](https://gist.github.com/tianheg/1ce40c3e06eddab6bc72b87cc26ec067).
- 📫 Email me at: [yidajiabei@gmail.com](mailto:yidajiabei@gmail.com)
- 💰 Support my work on [爱发电](https://afdian.net/@yidajiabei)!

<em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> :)</em>

[![README Card](https://tianheg-readme-stats.vercel.app/api/pin/?username=tianheg&repo=our)](https://github.com/tianheg/our)

---

⏰ Updated on ${new Date().toUTCString()}`
console.log(readme)
