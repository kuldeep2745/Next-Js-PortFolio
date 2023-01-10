import Image from "next/image";
import Navigation from "./Navigation";
import logo from "../../public/next.svg";
// import Link from 'next/link';

export default function Header() {
  return (
    <>
  <nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Fixed top</a>
  </div>
</nav>
    </>
  );
}
