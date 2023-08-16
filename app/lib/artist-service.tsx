export class ArtistService
{
    async getAllArtists() : Promise<Artist[]>
    {
        const result = await fetch('http://localhost:5044/api/Artists/GetAllArtistsAsync');
        const artists = result.json();
        return artists;
    }
}

interface Artist{
    id: number;
    name : string;
    label: string;
    isOnTour: boolean;
}