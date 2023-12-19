import "./header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="headerTitles"> 
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://www.gistyarn.com/cdn/shop/files/Beam_1200x.jpg?v=1649093718"></img>
        </div>
    )
}