import './index.css'


const Loyalty = () =>{
    return(
        <div className="card-container">
            <div className='name-level-container'>
            <h1 className='name'>Harsh Kirana Store</h1>
            <p className='level'>Level 1</p>
            </div>
            <div className='number-points-container'>
                <p className='number'>5200 <span style={{fontFamily: 'Inter',fontSize: '20px',fontStyle: 'normal',fontWeight: '400',lineHeight: 'normal'}}> Points</span></p>
            </div>
            <div className='till-valid-container'>
                <p className='till'>Customer Since: 12/2023</p>
                <p className='valid'>Valid till: 12/99</p>
            </div>
            <p className='shop-details'>Shop for <span style={{fontFamily: 'Inter',fontSize: '12px',fontStyle: 'normal',fontWeight: '700',lineHeight: 'normal',}}> Rs 900 </span>more to reach level 2</p>
            <div className='level-update-bar-container'>
                <p className='level1'>1</p>
                <p className='bar-white'>
                <p className='bar'></p>
                <p className='white'></p>
                </p>
                <p className='level1'>2</p>
            </div>
            <div className='trans-logo-container'>
                <p className='trans'>See Transactions</p>
            </div>
        </div>
    )
}

export default Loyalty