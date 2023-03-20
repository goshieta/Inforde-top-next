export default async (req,res)=>{
    const trend=await fetch("https://trends.google.co.jp/trends/trendingsearches/daily/rss?geo=JP")
    //返す情報 - 天気,ニュース,トレンド
    res.status(200).json({
        copyright:"2023 Inforde",
    })
}