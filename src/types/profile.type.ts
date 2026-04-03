// Example API Response:
// {
//     "id": "f10c05c6-d8b8-4bc7-aa3c-bc3260039063",
//     "providerId": "lZYKlt7bQCnr3HWLZDI4MOHIvpCiEhrc",
//     "name": "Ocean Delight",
//     "logo": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
//     "coverImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
//     "description": "Fresh and delicious seafood...",
//     "phone": "+880 1754-525500",
//     "address": "House 12, Road 5, Mohammadpur, Dhaka",
//     "isActive": true,
//     "workingHours": "10:00 AM - 11:00 PM",
//     "rating": 4.5,
//     "reviewCount": 120,
//     "createdAt": "2026-02-07T15:12:25.166Z",
//     "updatedAt": "2026-04-03T10:35:57.635Z"
// }

export interface ProfileFormData  {
    // Editable fields
    name: string;
    logo?: string;
    coverImage?: string;
    description?: string;
    phone: string;
    address?: string;
    workingHours?: string;

}