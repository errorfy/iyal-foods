
const ImgList = () => {
  const cards = [
    {
      id: 1,
      imgSrc: 'https://imgs.search.brave.com/COxa279fY0YbL1N8aImpzoViQgMTF5gKuKNHbDomx5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFuaGVhbHRo/eXJlY2lwZXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA0L3JhZ2ktcm90/aS1yYWdpLXJvdHRp/LXJlY2lwZS03Njh4/MTE1Mi53ZWJw',
      title: 'DIET',
      description: 'In today fast-paced world, many struggle with maintaining a healthy weight. Did you know that around 5% of India population.',
    },
    {
      id: 2,
      imgSrc: 'https://imgs.search.brave.com/QxoYIhmh6-PjdQniiQEPcG95wLyjy6YFARxBSybxpP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcm9t/c2NyYXRjaGZhc3Qu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIxLzA1L01pbGxl/dC1CcmVha2Zhc3Qt/UG9ycmlkZ2UtMTQt/NjgzeDEwMjQuanBn',
      category: 'Vivamus',
      title: 'breakfast',
      description: 'Life happens! We’ve all had those mornings when the alarm just isn’t enough. Now it’s a race against the clock to get to where I need to be.',
    },
    {
      id: 3,
      imgSrc: 'https://imgs.search.brave.com/c1Q1zW_yupY2cCGyzfhd9qasjWECHZM_XAGBu4Uy1g0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8x/MS8xMi8xOS8yNS9k/aWFiZXRlcy01Mjg2/NzhfNjQwLmpwZw',
      category: 'Pellentesque',
      title: 'diabetes',
      description: 'Maintaining a well-balanced diet is key for managing diabetes and promoting overall health.',
    },
    {
      id: 4,
      imgSrc: 'https://imgs.search.brave.com/RjM-KnQOB2bEIOxxnsRubul07ryR_yF4BtFi6DDAihc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhlcXVpbnQu/Y29tL3RoZXF1aW50/LzIwMTgtMTIvY2Qw/MTNhODAtN2NiZC00/MThmLWIyY2EtY2U4/YWY3ZDllYTU2L2lT/dG9ja180ODA0NTE1/ODYuanBnP2F1dG89/Zm9ybWF0LGNvbXBy/ZXNzJmZtdD13ZWJw/JndpZHRoPTcyMA',
      category: 'Aenean',
      title: 'healthy living',
      description: 'Everything seems fine until you catch yourself noticing unexpected weight gain, maintaining a healthy lifestyle can feel like a challenge.',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div key={card.id} className="max-w-xl p-6 bg-white rounded-md shadow-lg text-gray-900">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="object-cover object-center w-full rounded-md h-48"
            />
            <div className="mt-4 mb-2">
              <h2 className="text-xl font-bold uppercase tracking-wide">{card.title}</h2>
            </div>
            <p className="text-gray-600 italic">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgList;
