import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full h-[100px] bg-[url('../public/img/menu-bottom.png')] bg-center bg-cover drop-shadow-xl flex items-center justify-around">
            <Link href={'/'} className="bg-[url('../public/img/house.png')] bg-center bg-cover w-[7em] h-[7em] hover:scale-110 green_hover active:scale-95"></Link>
            <Link href={'/shop'} className="bg-[url('../public/img/shop.png')] bg-center bg-cover w-[7em] h-[7em] hover:scale-110 green_hover active:scale-95"></Link>
            <Link href={'/chapters'} className="bg-[url('../public/img/book.png')] bg-center bg-cover w-[7em] h-[7em] hover:scale-110 green_hover active:scale-95"></Link>
            <Link href={'/secret'} className="bg-[url('../public/img/cake.png')] bg-center bg-cover w-[7em] h-[7em] hover:scale-110 green_hover active:scale-95"></Link>
        </div>
    );
}