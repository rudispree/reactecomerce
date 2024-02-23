import React, { Component } from 'react'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import { Link } from 'react-router-dom';

class MegaMenuAll extends Component {
    
     constructor(){
          super();
          this.state ={
               MenuData:[]
          }
     } 

     componentDidMount(){
          axios.get(AppURL.AllCategoryDetail).then(response => { 
              // console.log("Data dari server:", response.data);
               this.setState({ MenuData: response.data });
           }).catch(error => {
               console.error("Error fetching data:", error);
           });
           
     }

     MenuItemClick=(event)=>{
          event.target.classList.toggle("active");
          var panel = event.target.nextElementSibling;
          if(panel.style.maxHeight){
               panel.style.maxHeight = null;
          }else{
               panel.style.maxHeight= panel.scrollHeight+ "px"
          }

     }

     


     render() {


          const CatList = this.state.MenuData;
       
          if (CatList.length === 0) {
            return <div>Loading...</div>;
          }
       

          const MyView = CatList.map((CatList, i) => {
               
               return (
                 <div key={i.toString()}>
                   <button onClick={this.MenuItemClick} className="accordionAll">
                     <img className="accordionMenuIconAll" src={CatList.category_image} />&nbsp; {CatList.category_name}
                   </button>
                   <div className="panelAll" key={`panel_${i}`}>
                     <ul>
                       {CatList.subcategory_name.map((SubList, j) => {
                         return (
                           <li key={`subcategory_${i}_${j}`}>
                          
                             <Link to={"/productsubcategory/"+CatList.category_name+"/"+SubList.subcategory_name } className="accordionItem" >{SubList.subcategory_name} </Link>
                           </li>


                           
                         );
                       })}
                     </ul>
                   </div>
                 </div>
               );
             });
             



          return (
               <div className="accordionMenuDivAll">
                    <div className="accordionMenuDivInsideAll">
                    {MyView}
                    </div>
               </div>
          )
     }
}

export default MegaMenuAll

