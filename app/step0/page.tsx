import Image from "next/image";
const host = "https://images.unsplash.com";
const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image: `${host}/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image: `${host}/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image: `${host}/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
  },
];

export default function Step0() {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <li key={person.email} className="flex py-4">
          <Image
            className="size-10 rounded-full"
            src={person.image}
            alt=""
            width={40}
            height={40}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
