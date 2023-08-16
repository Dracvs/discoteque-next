import {ArtistService} from '../lib/artist-service';

const _artistService = new ArtistService();
const _artistIsOnTour = "This artist is on tour!";
const _artistIsNotOnTour = "This artist is chilling home!";

export default async function Page(){
    
    let artists = await _artistService.getAllArtists();
    return(
        <div className="mx-auto">
            <h1 className='text-5xl'>The Artist Next List</h1>
            <hr/>            
            <div className="flex flex-wrap">
                {artists.map(
                    (artist) =>  (
                        <div className="card w-96 bg-base-100 shadow-xl m-1.5" key={artist.id}>                
                            <div className="card-body">
                                <h2 className="card-title">{artist.name}</h2>
                                <p>{ artist.isOnTour ? 
                                    _artistIsOnTour : _artistIsNotOnTour }</p>
                                <div className="card-actions justify-end">
                                <button disabled={!artist.isOnTour} className="btn btn-primary">Buy Tickets</button>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
            <p>The list contains: {artists.length} artists</p>
        </div>
    )
}