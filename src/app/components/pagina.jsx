'use client'

import Profile from "@/components/Profile";

export default function Home() {

  const users = [
    {
      name: 'juan',
      lastName: 'perez',
      id: '123456',
      img: 'data:image/jpeg;base64,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',
      comentarios: ['hola', 'soy un']
    },
    {
      name: 'maria',
      lastName: 'gomez',
      id: '654321',
      img: 'https://randomuser.me/api/portraits/women/1.jpg',
      comentarios: ['buenos días', 'me gusta programar']
    },
    {
      name: 'carlos',
      lastName: 'ramirez',
      id: '789012',
      img: 'https://randomuser.me/api/portraits/men/2.jpg',
      comentarios: ['hola a todos', 'soy desarrollador']
    },
    {
      name: 'laura',
      lastName: 'fernandez',
      id: '345678',
      img: 'https://randomuser.me/api/portraits/women/3.jpg',
      comentarios: ['encantada', 'amo React']
    }
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      {users.map(user => (
        <Profile
          key={user.id}
          name={user.name}
          lastName={user.lastName}
          id={user.id}
          img={user.img}
          comments={user.comentarios}
        />
      ))}
    </div>
  );
}
