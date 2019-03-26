import * as React from 'react'
import ReactDOM from 'react-dom'

const root = document.querySelector('#root')

interface Item {
    color: string
    img: string
    brand: string
    year: string
    price: number
}

const colors = {
    blue: ['#aee', '#bff'],
    green: ['#eea', '#bbf'],
    red: ['#eaa', '#fbb'],
    orange: ['#eaa', '#fbb'],
    yellow: ['#eea', '#ffb'],
    white: ['#ddd', '#eee']
}

class App extends React.PureComponent<{}, {items: Item[], sel?:number, hov?: number}> {
    constructor(props: {}) {
        super(props)
        this.state = {items: sampleItems()}
    }

    render() {
        const {items, sel, hov} = this.state
        const ix = hov || sel || 0
        const item = items[ix]

        return (
            <div>
                <h1>gramm</h1>
                <img className='hero' src={this._getImgUrl(item)} />
                <div className='buy'>
                    <div>
                        <strong>{item.color}</strong> {item.brand} {item.year}
                    </div>
                    <div>
                        ${item.price} on <a target="_blank" href="https://google.com">insta</a>
                    </div>
                </div>
                <div className='thumbs'>
                    {items.map((i, ix) => (
                        <img 
                            className='thumb'
                            src={this._getThumbUrl(i)}
                            style={{background: sel === ix ? colors[i.color][0] : undefined}}
                            onClick={() => this.setState({sel: sel === ix ? undefined : ix})}
                            onMouseOver={() => this.setState({hov: ix})}
                            onMouseOut={() => this.setState({hov: undefined})}
                        />
                    ))}
                </div>
            </div>
        )
    }

    _getImgUrl(item: Item) {
        return `/img/${item.color}/${item.img}`
    }

    _getThumbUrl(item: Item) {
        return `/thumb/${item.color}/${item.img}`
    }
}

ReactDOM.render(<App/>, root)

function sampleItems() {
    const imgs = [
        {color:'blue', img:'52810528_121676108934712_1247016508250161910_n.jpg'},
        {color:'blue', img:'53347711_183160075987945_8838691087738799654_n.jpg'},
        {color:'blue', img:'51752549_830491020633241_1913084722903881565_n.jpg'},
        {color:'blue', img:'51807990_1258264174323533_4130323741213444941_n.jpg'},
        {color:'blue', img:'53343717_179254779723681_3873170302021743624_n.jpg'},
        {color:'blue', img:'50902230_311965066122090_3977782591617572337_n.jpg'},
        {color:'blue', img:'54204243_129532881502703_1284726052595290296_n.jpg'},
        {color:'blue', img:'53759583_397162370840294_6914319310686873365_n.jpg'},
        {color:'blue', img:'52123992_422081668543287_8293516365253444552_n.jpg'},
        {color:'blue', img:'54510982_497647184100237_371294777994651717_n.jpg'},
    
        {color:'green', img:'52621821_134574434260057_2288328461611930747_n.jpg'},
        {color:'green', img:'50867091_624711834656772_2783032989781801558_n.jpg'},
        {color:'green', img:'51448067_347706479411794_8884725547397981140_n.jpg'},
        {color:'green', img:'54510837_2352288354830081_6100976187486922659_n.jpg'},
        {color:'green', img:'53230829_553273111835290_2389459206877809070_n.jpg'},
        {color:'green', img:'53236608_407671183359977_7739368294974900342_n.jpg'},
        {color:'green', img:'52887166_247328612844866_3273477476989321639_n.jpg'},
        {color:'green', img:'53619823_418688145572312_4703249475095663993_n.jpg'},
        {color:'green', img:'51725340_249579049279007_4897050638485011026_n.jpg'},
    
        {color:'red', img:'53493095_636680856754295_5407861036216116015_n.jpg'},
        {color:'red', img:'53685929_308246516526983_8119578574697620819_n.jpg'},
        {color:'red', img:'51229603_617121965419570_6808260163257382895_n.jpg'},
        {color:'red', img:'50515166_257074931862022_521066298024830951_n.jpg'},
        {color:'red', img:'54513685_1142819029232429_4031532203568665909_n.jpg'},
        {color:'red', img:'54447109_575551002965947_759599379329679727_n.jpg'},
        {color:'red', img:'54447387_369395343914599_4985392599483766252_n.jpg'},
        {color:'red', img:'46368441_542238136262404_1428974042126045289_n.jpg'},
        {color:'red', img:'51635273_120417962376110_7124589875395148357_n.jpg'},
    
        {color:'yellow', img:'53584795_1506722769462005_380175763104659748_n.jpg'},
        {color:'yellow', img:'53548195_394695454680317_608576995673182686_n.jpg'},
        {color:'yellow', img:'53430141_824667287876596_32595064070685635_n.jpg'},
        {color:'yellow', img:'52179417_266047090997528_2365433829192864848_n.jpg'},
        {color:'yellow', img:'52006050_2116751558378624_8318564844478194553_n.jpg'},
        {color:'yellow', img:'53258221_183251179305169_507161415439235049_n.jpg'},
        {color:'yellow', img:'52906932_762343427480334_4317173310063118393_n.jpg'},
        {color:'yellow', img:'54800433_1582943721850045_4465991598020684362_n.jpg'},
        {color:'yellow', img:'54457930_2270283469859129_5130248585958573321_n.jpg'},
    
        {color:'orange', img:'54512156_125396201905827_3736090341883918430_n.jpg'},
        {color:'orange', img:'53642106_366217514232426_8236429085984244676_n.jpg'},
        {color:'orange', img:'52755315_244301969787183_4782614425147774692_n.jpg'},
        {color:'orange', img:'52594943_122447375499233_1056802691954348636_n.jpg'},
        {color:'orange', img:'52354649_401663540618378_4604702821558912497_n.jpg'},
        {color:'orange', img:'51822324_1110487325797769_8342648047463189283_n.jpg'},
        {color:'orange', img:'52876890_387335078766277_6190826931428567822_n.jpg'},
    
        {color:'white', img:'53641613_816439018721372_5355879914085483764_n.jpg'},
        {color:'white', img:'51620324_185384392426598_8824008638428560830_n.jpg'},
        {color:'white', img:'54212904_145561469811023_7824069573647630724_n.jpg'},
        {color:'white', img:'53010813_302221417129521_8377117765507940200_n.jpg'},
        {color:'white', img:'53567470_1316602298478861_5129514741130091988_n.jpg'},
        {color:'white', img:'51036665_1918997554896420_5663531169887271065_n.jpg'},
        {color:'white', img:'53030759_777144585990762_3728521192703571445_n.jpg'},
        {color:'white', img:'52974180_316322445907726_6779917453669665140_n.jpg'},
        {color:'white', img:'51472601_817849491928785_4080201013926287177_n.jpg'},
        {color:'white', img:'52403931_303591066889539_3664887072467411413_n.jpg'},
        {color:'white', img:'51655265_126603108393711_1219497676320514587_n.jpg'},
        {color:'white', img:'52566037_101801200960734_5065832033269380654_n.jpg'},
        {color:'white', img:'53213305_846647079005021_8180931671641391687_n.jpg'},
        {color:'white', img:'51512800_318136585495488_1984303535979345992_n.jpg'},
        {color:'white', img:'52111605_2031596666956972_1298360522936084075_n.jpg'},
        {color:'white', img:'53637625_398022120993402_8308048895798750473_n.jpg'},
        {color:'white', img:'50758919_119316259139805_4580548673136233230_n.jpg'}
    ]

    const brands = ['balenciaga', 'fendi', 'acronym', 'cdg', 'supreme']
    const years = ['ss 17', 'fw 17', 'ss 18', 'fw 18', 'ss 19', 'fw 19']
    return imgs.map(i => Object.assign(i, {
        brand: brands[Math.random() * brands.length | 0],
        year: years[Math.random() * years.length | 0],
        price: 400 + Math.random() * 1000 | 0
    }))
}