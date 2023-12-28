import { IoMdCloseCircle } from 'react-icons/io'
import vendorlist from '../../../assets/icons/Vendorlist.png'
import customize from '../../../assets/icons/customize.png'
import {AiTwotoneStar,AiOutlineAudio} from 'react-icons/ai'
import {MdNotes} from 'react-icons/md'
import {Button} from 'react-bootstrap'
import './OrderSidebar.css'

function OrderSidebar(props)
{
  return (
   <aside className='o-sidebar' >
    <div className='close-btn' onClick={() => props.close()} ><IoMdCloseCircle color='#fff' size={27}/></div>
    <div className='sidebar-details'>
      <div className='text-sidebar-start'>Vendor Details</div>
      <div className='sidebar-image'><img src={props.source.image} alt="here" style={{width : '23vw' , height: '18vh'}} ></img></div>
      <div className='name-review'>
            <div>{props.source.name}</div>
            <div>{props.source.rating}<AiTwotoneStar></AiTwotoneStar></div>
      </div>
      <div className='tag-reviews'>
        <div>{props.source.tag}</div>
        <div>250 Reviews</div>
      </div>
      <div className='text-sidebar-btn-new'> 16 Completed Orders</div>
      <div className='line'>
        <hr style={{marginBottom:'0.5em' , marginTop:'0.5em'}}></hr>
      </div>
      <div className='text-sidebar'>Your Customizations</div>
    <div className='sidebar-image'><img src={customize} style={{width : '23vw' , height:'17vh'}}             alt="here"></img></div> 
      <div className='text-sidebar-btn'>
        Your Notes
      </div>
      <div className='notes'>
        <div>
          <AiOutlineAudio/><br/>
          <p>Audio Note</p>
        </div>
        <div>
          <MdNotes/><br/>
          <p>Text Note</p>
        </div>
      </div>
      <div className='line'>
        <hr style={{marginBottom:'0.5em' , marginTop:'0.3em'}} ></hr>
      </div>
      <div className='Note'>
        <b>Notes:</b>&nbsp;<m>
        Placing an order with this vendor would send your customized nameplates and custom audio/video notes for reference </m>
      </div>
      <div className='line'>
        <hr style={{marginBottom:'0.5em' , marginTop:'0.3em'}} ></hr>
      </div>
      <div><Button className='btn' variant='primary' style={{width:'24vw' , height:'6vh' , backgroundColor:'#0913FA'}}>Place Order</Button></div>
    </div>
   </aside>
  )
}

export default OrderSidebar;