import React ,{Component} from 'react'
import imagem from '../../Assets/im.jpg' 
import vida from '../../Assets/vida.jpg' 
import tumbleimagem from '../../Assets/tumbleim.jpg' 
import tumblevida from '../../Assets/tumblevida.jpg' 
import toph from '../../Assets/toph.jpg' 
import tumbletoph from '../../Assets/tumbletoph.jpg' 
import  'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import './Home.css'



  const images = [
    {
      original: vida,
      thumbnail:tumblevida,
    },
    {
      original:  imagem ,
      thumbnail:tumbleimagem,
    },
    {
      original:  toph,
      thumbnail:tumbletoph,
    },

  ];


export default class Home extends Component{

  state = {

    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showVideo: {}

  }


        render(){
            return(
                <div className="conteinerHome">

                    
                    <ImageGallery 
                    items={images}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showNav={this.state.showNav}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    />  
                   

                    <div className="subConteinerHome">
                        <h1 className="ladoA">ladoA</h1>
                        <h1 className="ladoB">animação deste lado</h1>
                    </div>
                </div>
            )
        }
}