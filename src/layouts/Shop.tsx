import React from 'react'
import ShopDelimiter from '../components/shop/ShopDelimiter'
import ShopItem from '../components/shop/ShopItem'

const Shop = () => {
    return (
        <div className='container  py-10 px-2 bg-[var(--main-beige-color)]'>
            <ShopDelimiter imgUrl='s' title='s' >
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}
                    sale
                />
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />

                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}
                    sale
                />
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />
            </ShopDelimiter>
            <ShopDelimiter imgUrl={"https://cache.stylist.fr/data/photo/w1000_ci/1pg/clean-beauty.jpg"}
                title="קרמים להגנה על העור"
            >
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />
                <ShopItem imgUrl={"https://caiacosmetics.com/img/bilder/artiklar/zoom/CAI815_2.jpg?m=1635583091"}
                    title={' קרם גוף בניחוח דובדבן'}
                    subtitle={"קרם עבה"}
                    price={"445"}

                />
            </ShopDelimiter>
        </div>
    )
}

export default Shop