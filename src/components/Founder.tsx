// import user from '../assets/user.png'
const people = [
  {
    name: 'ELAVARASAN',
    role: 'Founder',
    email: 'elavarsan@iyalagrofoods.com',
    imageUrl:
      'https://imgs.search.brave.com/MfCMRjbwpgFuoONjuznH5NyMPYgEXwI4nagKtkUzPOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n',
  },
  {
    name: 'TAMIL BHARATHI S N',
    role: 'CEO',
    email: 'tamilbharathi@iyalagrofoods.com',
    imageUrl:
      'https://imgs.search.brave.com/MfCMRjbwpgFuoONjuznH5NyMPYgEXwI4nagKtkUzPOA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODVlNGJmM2NiMTFi/MjI3NDkxYzMzOWEu/cG5n',
  },
  // More people...
]

export default function Founder() {
  return (
    <div className="bg-white py-14 sm:py-30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">Meet Our Leadership</h2>
          <p className="mt-4 text-sm  leading-8 text-gray-600">
            At IyalAgroFoods, our leadership team is dedicated to promoting healthy, sustainable food choices for all. Our leaders combine deep industry knowledge with a passion for nature, ensuring every product is crafted with care and responsibility.
          </p>
        </div>

        <div className="mt-12 flex justify-end">
          <ul role="list" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {people.map((person) => (
              <li key={person.name} className="bg-white border border-gray-200 rounded-lg overflow-hidden p-6">
                <div className="flex items-center gap-x-3">
                  <img alt="" src={person.imageUrl} className="h-16 w-16 rounded-full object-cover" />
                  <div>
                    <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-bold leading-6 text-green-800">{person.role}</p>
                    <p className="text-sm font-semibold leading-6 text-gray-600">{person.email}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

