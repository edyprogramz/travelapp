import './Destination.css';
import DestinationData from './DestinationData';

function Destination() {
    return (  
        <div className='destination'>
            <div className='header'>
                <h1>Favourite Destination</h1>
                <p>“ I travel not to go anywhere, but to go. I travel for travel's sake. The great affair is to move. ”
                <br/> ~Robert Louis Stevenson</p>
            </div>


            <DestinationData
            cName="destination-data"
            title="Diani Beach, Kwale"
            description="This beach has many tall palm trees and the clear blue waters of the charming beach area, which is a place you don't want to go when you come. The beauty of the scenery is not inferior to places such as Bali. Diani Beach is a famous attraction in Kenya, as many tourists flock to the place, Diani Beach has a different natural landscape, there will be purple clouds at night, the sea and clouds are very charming. The best travel season for Diani Beach: It is recommended to play in all seasons: The particularly beautiful Diani beach prompted us to move."
            img1="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
            img2="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />

            <DestinationData
            cName="destination-data-reverse"
            title="Fort Jesus Museum, Mombasa"
            description="Jesus Fort is a landmark of Mombasa and enriches Mombasa's history, from the Portuguese establishment to the Omanians and the British, every time they change hands, they leave their mark. Zheng He's fleet visited many times six hundred years ago, and Mombasa was closer to China. Many of the cultural relics displayed in the castle are from China!"
            img1="https://images.unsplash.com/photo-1623680904963-5580d963e18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            img2="https://images.unsplash.com/photo-1575492534537-792e4e1b8bed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />

            <DestinationData
            cName="destination-data"
            title="Haller Park, Mombasa"
            description="Haller Park is a nature park in Bamburi, Mombasa, on the Kenyan coast. It is the transformation of a quarry wasteland into an ecological area. Haller Park holds a variety of plant and animal species which serve as a recreation spot for tourists and locals. Up to March 2007 it held the attraction of Owen and Mzee – the friendship of a hippopotamus and a tortoise"
            img1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/21/b7/8b/caption.jpg?w=1100&h=-1&s=1"
            img2="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ_D_rKst0GyeEKPjQytSZT4B4mmNb9tQ1PJRcrmlnXPqUH-lNGPdstadAMEbmUjD6HuCB-MELMeJaXstPVT_KSmg"
            />

           
           
            
        </div>
    );
}

export default Destination;
