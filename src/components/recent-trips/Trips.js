import './Trip.css';
import TripData from './TripData';

function Trip() {
    return (  
        <>
        <div id='header'>
            <h1>Recent Trips</h1>
            <p>“ One travels more usefully when alone, because he reflects more. ”</p>
        </div>
        <div className="trip">
            <TripData
            img="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Trip to Dubai"
            description="Enjoyed the experience of the Burj khalifa. There was no long queues and got to the 124th floor quickly. Enjoyed the views and could take photos no problem as not too busy. The staff were good and well organized. One of the best malls in Dubai. The mall has some of the best brands available. You must visit the fountain area. The entrance to the Burj Khalifa is right there near the mall.They have a huge food court . "
            />

            <TripData
            img="https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            title="Trip to France"
            description="My wife and I honeymooned in France and are so glad we trusted Marie and The French Travel with planning our trip! We gave her a general idea of what we wanted our trip to look like and what we wanted to do, and she planned us a detailed itinerary that was better than either of us could have imagined. She arranged for private tours for us, each with knowledgeable and friendly guides who helped make our trip incredibly special."
            />

            <TripData
            img="https://images.unsplash.com/photo-1593995863951-57c27e518295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
            title="Trip to Brazil"
            description="Best of Brazil is a great trip choice. Relaxing with plenty to do as well. Brazil is beautiful and fun. Nathaly was an excellent tour guide and really helped us out all along the way. Waterfalls, day boat trips. I would recommend one extra day in Rio if you decide to take it, just so you're not rushed with those sites."
            />

        </div>
        </>
    );
}

export default Trip;
