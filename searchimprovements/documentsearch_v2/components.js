let searchProducts = [
  {
    midascode: 286188,
    description: 'HARIBO Balla Bites 140g',
    img: 'https://media.booker.co.uk/bbimages/1/05f057b7-13ed-4e32-a097-0ca9a4b3a323.jpg?date=20240909',
    volume: '12 x 140g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 286192,
    description: 'HARIBO Balla Stixx Strawberry Flavour 140g',
    img: 'https://media.booker.co.uk/bbimages/1/8e5432ca-e489-4f3d-8224-b00c8b4bdecb.jpg?date=20240909',
    volume: '12 x 154g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 286227,
    description: 'HARIBO Bubblegum Bottles Zing 160g',
    img: 'https://media.booker.co.uk/bbimages/1/7c70526b-b428-4f89-833a-6a8ad7a502bc.jpg?date=20240909',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 34.5,
    price: 8.19
  },
  {
    midascode: 89443,
    description: 'HARIBO Chamallows 1kg',
    img: 'https://media.booker.co.uk/bbimages/1/02509c97-67c3-4da5-90de-0d129cb494c3.jpg?date=20240909',
    volume: '1kg',
    rrp: 0,
    por: 0,
    price: 5.29
  },
  {
    midascode: 284312,
    description: 'HARIBO Giant Cola 720g',
    img: 'https://media.booker.co.uk/bbimages/1/dd16a839-1a21-402e-9746-2da5016426c5.jpg?date=20240909',
    volume: '4 x 40pc',
    rrp: 0,
    por: 0,
    price: 16.29
  },
  {
    midascode: 294657,
    description: 'HARIBO Happy Cola 140g',
    img: 'https://media.booker.co.uk/bbimages/1/193e4b5d-c326-405b-90bd-11ae0a0f5db2.jpg?date=20240909',
    volume: '12 x 140g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  },
  {
    midascode: 260494,
    description: 'HARIBO Starmix Fruit & Cola Flavour Jelly & Foam Sweets Sharing Bag 160g',
    img: 'https://media.booker.co.uk/bbimages/1/5ef52464-87b7-47a9-8a09-1d6695838a18.jpg?date=20240909',
    volume: '12 x 160g',
    rrp: 2.39,
    por: 49.2,
    price: 12.15
  },
  {
    midascode: 295906,
    description: 'HARIBO Tangfastics Fruit & Cola Flavour Fizzy Jelly Sweets Sharing Bag 154g',
    img: 'https://media.booker.co.uk/bbimages/1/e5805c6d-64cf-4124-a67e-d1b78086fad3.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  },
  {
    midascode: 288953,
    description: 'HARIBO Sour Skeletons 140g',
    img: 'https://media.booker.co.uk/bbimages/1/2cb1c3da-41ba-4e6d-88ac-70230a7b46c3.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 29.7,
    price: 8.79
  },
  {
    midascode: 295909,
    description: 'HARIBO Twin Snakes 154g',
    img: 'https://media.booker.co.uk/bbimages/1/7f81f2e4-e352-4592-969b-3d952258aad2.jpg?date=20240923',
    volume: '12 x 160g',
    rrp: 1.25,
    por: 27.3,
    price: 9.09
  }
];

let searchDocuments = [
  {
    id: 1,
    description: 'Website Terms and Conditions',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 2,
    description: 'Booker Retail Partners Allocations Guide',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    url: ''
  },
  {
    id: 3,
    description: 'Booker Oil Return Service - Get £5 Per Litre',
    category: 'PDF Document',
    icon: '<i class="fa-regular fa-file-pdf fa-2xl"></i>',
    url: ''
  },
  {
    id: 4,
    description: 'Summer 2025 Pre-Sell',
    category: 'Word Document',
    icon: '<i class="fa-regular fa-file-word fa-2xl"></i>',
    url: ''
  },
  {
    id: 5,
    description: 'Summer Sales Pre-Sell 2023 - Coca-Cola',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 6,
    description: 'Privacy Policy & Cookies',
    category: 'Web Page',
    icon: '<i class="fa-regular fa-file fa-2xl"></i>',
    url: ''
  },
  {
    id: 7,
    description: 'Tobacco Pricing Changes - 2024 Budget',
    category: 'Excel Document',
    icon: '<i class="fa-regular fa-file-excel fa-2xl"></i>',
    url: ''
  },
];


let searchInput = document.querySelectorAll('#search-input.input-group');



let mobileSearchInputHtml = `
  <script src="https://cdn.jsdelivr.net/npm/scandit-sdk@5.x"></script>
  <style>
    .scandit-video {
      display: none;
    }
   </style>
   <div class="scanner-picker">
    <div id="scanner-icon">
        <a id="barcode-picker-starter-button" href="#" onclick="startBarcodePicker(); ">
            <img src="/images/barcode-icon.png" alt="Scan Barcode">
        </a>
    </div>
    <div id="scanner-modal" class="fixed-top w-100 h-100 bg-white d-none">
        <div class="scanner-header scanner-header-green row">
            <div class="col-6" onclick="stopBarcodePicker();" style="cursor: pointer;">
                <i id="scanner-close-button" class="fas fa-chevron-left position-absolute top-0 start-0"></i>
                <h3 class="mb-0 ml-4">Back</h3>
            </div>
            <div id="scanner-minicart" class="col-6 text-right">
            </div>
        </div><div id="barcode-picker" class="scanner scandit-hidden"><div class="scandit scandit-container"><div class="scandit scandit-barcode-picker"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0yNi4xNCA4YTQuOTkgNC45OSAwIDAgMC00LjE2IDIuMjI3bC0yLjIxOCAzLjMyOGExLjAwMyAxLjAwMyAwIDAgMS0uODMyLjQ0NUgxOHYtMmMwLTEuMTAyLS44OTgtMi0yLTJoLTZjLTEuMTAyIDAtMiAuODk4LTIgMnYySDVjLTEuNjUyIDAtMyAxLjM0OC0zIDN2MzZjMCAxLjY1MiAxLjM0OCAzIDMgM2g1NGMxLjY1MiAwIDMtMS4zNDggMy0zVjE3YzAtMS42NTItMS4zNDgtMy0zLTNoLTN2LTFjMC0xLjEwMi0uODk4LTItMi0yaC0yYy0xLjEwMiAwLTIgLjg5OC0yIDJ2MWgtNC45MzhhLjk5Ny45OTcgMCAwIDEtLjgyOC0uNDQxbC0yLjI1NC0zLjM1MkE1LjAwMSA1LjAwMSAwIDAgMCAzNy44MjggOHptMCAyaDExLjY4OGMxIDAgMS45MzQuNDk2IDIuNDkyIDEuMzI0bDIuMjU0IDMuMzUyQTIuOTk4IDIuOTk4IDAgMCAwIDQ1LjA2MyAxNkg1OWMuNTUgMCAxIC40NSAxIDF2MzZjMCAuNTUtLjQ1IDEtMSAxSDVjLS41NSAwLTEtLjQ1LTEtMVYxN2MwLS41NS40NS0xIDEtMWgxMy45M2MxLjAwNCAwIDEuOTM3LS41IDIuNDk2LTEuMzM2bDIuMjE5LTMuMzI4QTIuOTk4IDIuOTk4IDAgMCAxIDI2LjE0IDEwek0xMCAxMmg2djJoLTZ6bTQyIDFoMnYxaC0yem0tMjAgNWMtNS4yOSAwLTEwLjI0NiAyLjgzNi0xMi45MzQgNy4zOThhLjk5Ni45OTYgMCAwIDAgLjM1NiAxLjM2OC45OTcuOTk3IDAgMCAwIDEuMzY3LS4zNTZBMTMuMDY1IDEzLjA2NSAwIDAgMSAzMiAyMGM3LjE2OCAwIDEzIDUuODMyIDEzIDEzIDAgLjE4OC0uMDE2LjM3NS0uMDIzLjU2M2wtMi4yNy0yLjI3YTEgMSAwIDEgMC0xLjQxNCAxLjQxNGw0IDRjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhLjk5My45OTMgMCAwIDAgLjcwNy0uMjkzbDQtNGExIDEgMCAxIDAtMS40MTQtMS40MTRsLTIuMzIgMi4zMTZjLjAxMS0uMjAzLjAyNy0uNDA2LjAyNy0uNjA5IDAtOC4yNy02LjczLTE1LTE1LTE1ek0xOCAyOWExIDEgMCAwIDAtLjcwNy4yOTNsLTQgNGExIDEgMCAxIDAgMS40MTQgMS40MTRsMi4zMTMtMi4zMTZjLS4wMDguMjAzLS4wMi40MDYtLjAyLjYwOSAwIDguMjcgNi43MyAxNSAxNSAxNSA1LjM2NyAwIDEwLjM2LTIuODk4IDEzLjAyNy03LjU2M2EuOTk5Ljk5OSAwIDEgMC0xLjczNC0uOTkyQTEzLjA0MiAxMy4wNDIgMCAwIDEgMzIgNDZjLTcuMTY4IDAtMTMtNS44MzItMTMtMTMgMC0uMTg4LjAxMi0uMzc5LjAyLS41NjZsMi4yNzMgMi4yNzNjLjE5NS4xOTUuNDUuMjkzLjcwNy4yOTNhMSAxIDAgMCAwIC43MDctMS43MDdsLTQtNEExIDEgMCAwIDAgMTggMjl6bTkgMmMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xem01IDBjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6Ii8+PC9zdmc+Cg==" class="scandit-camera-switcher scandit-hidden"><div class="scandit-camera-fov-switcher scandit-hidden"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJiIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2NsaXBQYXRoPjxmaWx0ZXIgaWQ9ImEiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAxIDAiLz48L2ZpbHRlcj48bWFzayBpZD0iZCI+PGcgZmlsdGVyPSJ1cmwoI2EpIj48cGF0aCBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2c+PC9tYXNrPjxnIGlkPSJjIiBjbGlwLXBhdGg9InVybCgjYikiPjxwYXRoIGQ9Ik01MCAwYTUwIDUwIDAgMSAxIDAgMTAwQTUwIDUwIDAgMCAxIDUwIDBabTAgMCIgZmlsbD0iI2ZmZiIvPjwvZz48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYyIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGQ9Ik0yNC45NyA2NS44OGEzLjQ0IDMuNDQgMCAxIDAgMC02Ljg4IDMuNDQgMy40NCAwIDAgMCAwIDYuODhabTE5Ljk0LjQzYzcuMDMgMCAxMS45LTQuNDQgMTEuOS0xMS4wMyAwLTUuODctNC4xOS0xMC0xMC4xLTEwLTMuMTIgMC01LjYyIDEuMjUtNi45IDMuMjJoLS4xMmwuNzItOC41NmgxMi4xOGMxLjYzIDAgMi42My0xIDIuNjMtMi41NiAwLTEuNTctMS4wMy0yLjU3LTIuNjMtMi41N0gzOS4wNmMtMi41IDAtMy44NCAxLjAzLTQuMDYgMy42M2wtLjkgMTEuMzFWNTBjLS4xIDEuNzUuOTMgMy4yMiAzLjAyIDMuMjIgMS40NCAwIDIuMDctLjMxIDMuMzItMS41YTYuNDMgNi40MyAwIDAgMSA0LjQ3LTEuODRjMy4zNyAwIDUuNzUgMi4zIDUuNzUgNS41NiAwIDMuMzQtMi40MSA1Ljc1LTUuNzUgNS43NWE1Ljk3IDUuOTcgMCAwIDEtNS43Mi0zLjU2Yy0uNzItMS4xNi0xLjU2LTEuNjMtMi44MS0xLjYzLTEuNjYgMC0yLjcgMS0yLjcgMi42MyAwIC43OC4yIDEuNDMuNSAyLjEyIDEuNTcgMy4yOCA1LjgyIDUuNTYgMTAuNzMgNS41NlptMTcuMzctLjI1YzEuMTMgMCAxLjcyLS4zNCAyLjYtMS42OWw0LjQ2LTYuNjhoLjEzTDc0IDY0LjVjLjcyIDEuMDYgMS4zMSAxLjU2IDIuNTMgMS41NiAxLjY5IDAgMi45Ny0xLjA2IDIuOTctMi43NWEzLjE0IDMuMTQgMCAwIDAtLjY5LTEuOWwtNS4zMS03LjM4IDUuMjItNi45N2MuNjItLjc4Ljg0LTEuMzcuODQtMi4xOSAwLTEuNTYtMS4xOS0yLjYyLTIuOTQtMi42Mi0xLjEyIDAtMS44LjUzLTIuNjIgMS44MWwtNC4xOSA2LjRoLS4xMmwtNC4yOC02LjQzYy0uODUtMS4zNC0xLjUtMS43OC0yLjc1LTEuNzgtMS43MiAwLTMgMS4xOS0zIDIuNzUgMCAuNy4yMiAxLjM4LjY1IDEuOTRsNS4zNSA3LjI4LTUuMzggNy4xOWMtLjYuNzgtLjgxIDEuMzctLjgxIDIuMTIgMCAxLjUgMS4xNiAyLjUzIDIuODEgMi41M1ptMCAwIiBmaWxsPSIjZmZmIi8+PC9zdmc+" class="scandit-hidden"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJiIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2NsaXBQYXRoPjxmaWx0ZXIgaWQ9ImEiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlR3JhcGhpYyIgdmFsdWVzPSIwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAxIDAiLz48L2ZpbHRlcj48bWFzayBpZD0iZCI+PGcgZmlsdGVyPSJ1cmwoI2EpIj48cGF0aCBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMCAwaDEwMHYxMDBIMHoiLz48L2c+PC9tYXNrPjxnIGlkPSJjIiBjbGlwLXBhdGg9InVybCgjYikiPjxwYXRoIGQ9Ik01MCAwYTUwIDUwIDAgMSAxIDAgMTAwQTUwIDUwIDAgMCAxIDUwIDBabTAgMCIgZmlsbD0iI2ZmZiIvPjwvZz48L2RlZnM+PHVzZSB4bGluazpocmVmPSIjYyIgbWFzaz0idXJsKCNkKSIvPjxwYXRoIGQ9Ik0zOC40IDY2LjA2YzEuODggMCAzLjItMS4yNSAzLjItMy4yMnYtMjQuOWMwLTIuMjItMS4zOC0zLjYtMy42Ni0zLjYtMS4zNSAwLTIuMzUuMi0zLjg1IDEuMmwtNi4xMiA0LjI0Yy0xIC42OS0xLjM4IDEuNDQtMS4zOCAyLjQgMCAxLjM4Ljk0IDIuMzIgMi4yNSAyLjMyLjY2IDAgMS4xMy0uMTYgMS43Mi0uNmw0LjUtMy4xMmguMTN2MjIuMDZjMCAxLjk0IDEuMzEgMy4yMiAzLjIyIDMuMjJabTE0LjQxLTIuNTZjMS4wNiAwIDEuNTYtLjQgMi40NC0xLjI1bDUuMjUtNS4yMiA1LjI1IDUuMTljLjg4Ljg3IDEuMzggMS4yNSAyLjQ0IDEuMjVBMi41IDIuNSAwIDAgMCA3MC43NSA2MWMwLS45NC0uNDctMS41Ni0xLjIyLTIuMjhsLTUuMzctNS40NCA1LjM3LTUuNDRjLjc1LS43NSAxLjIyLTEuMzcgMS4yMi0yLjNhMi41IDIuNSAwIDAgMC0yLjU2LTIuNWMtMS4wNiAwLTEuNTYuNC0yLjQ0IDEuMjdsLTUuMjUgNS4yMi01LjIyLTUuMjJjLS44Ny0uODctMS4zNy0xLjI1LTIuNDQtMS4yNWEyLjUgMi41IDAgMCAwLTIuNTYgMi40N2MwIC45Ny40NyAxLjU2IDEuMTkgMi4zMWw1LjM3IDUuNDQtNS4zNyA1LjQ0Yy0uNzUuNzItMS4xOSAxLjM0LTEuMTkgMi4yOGEyLjUgMi41IDAgMCAwIDIuNTMgMi41Wm0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4=" class="scandit-hidden"></div><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Ik0zMC45MzggMWMtLjQ0Ni4wMi0xIC4yMy0xLjMxMy42NTZhMS4zMDIgMS4zMDIgMCAwIDAtLjA2My4wOTRsLTYuNzggMTIuMDYzLS4wNjMuMDkzYy0uNTU1Ljc4NS0uNzI3IDEuNzMtLjU5NCAyLjY1NmwtMjAuNSAyMi41NjMtLjAzMS4wMzFjLTEuMDcgMS4yMTktLjY2NCAzLjAxMi40NjggNC4xNTdoLjAzMmw0LjU5NCA0LjU5M2MuNTcuNTcgMS4yNjUuOTUgMiAxLjA2My43MzQuMTEzIDEuNTQ2LS4wNTUgMi4xNTYtLjU5NGguMDMxbDIyLjU2My0yMC41Yy45My4xMjkgMS44Ny0uMDQzIDIuNjU2LS41OTQuMDItLjAxNS4wNDMtLjAxNS4wNjItLjAzMWwuMDYzLS4wMzEgMTIuMDMxLTYuNzgyYy4wMzEtLjAxOS4wNjMtLjAzOS4wOTQtLjA2Mi40MjItLjMxMy42MzYtLjg2Ny42NTYtMS4zMTMuMDItLjQ0NS0uMDk4LS44NC0uMjUtMS4yNS0uMzA1LS44Mi0uODI4LTEuNjktMS41MzEtMi42ODctMS40MDctMS45OTItMy41MTYtNC4zOS01Ljc1LTYuNjI1LTIuMjM1LTIuMjM0LTQuNjAyLTQuMzEzLTYuNTk0LTUuNzE5LS45OTYtLjcwMy0xLjg2Ny0xLjIyNi0yLjY4OC0xLjUzMS0uNDEtLjE1Mi0uODA0LS4yNy0xLjI1LS4yNXptLjIxOCAyLjAzMWMuMDc4LjAxMi4xNTMuMDI0LjM0NC4wOTQuNTIuMTkxIDEuMy42MzMgMi4yMTkgMS4yODEgMS44MzYgMS4yOTcgNC4xNjggMy4zNTYgNi4zNDMgNS41MzIgMi4xNzYgMi4xNzUgNC4yMzUgNC40NzYgNS41MzIgNi4zMTIuNjQ4LjkxOCAxLjA5IDEuNzMgMS4yODEgMi4yNS4wNy4xOTEuMDgyLjI2Ni4wOTQuMzQ0TDM1LjEyNSAyNS41M2EuOTQ5Ljk0OSAwIDAgMC0uMTI1LjA5NGMtLjMxNi4yNDItLjg2LjMyOC0xLjQzOC4yMTlhMS4wNTYgMS4wNTYgMCAwIDAtLjE4Ny0uMDYzIDMuMTEzIDMuMTEzIDAgMCAxLTEuNDM4LS44MTJsLTYuOTA2LTYuOTA3Yy0uOTc2LS45ODQtMS4xMjktMi40MzctLjY1Ni0zLjA2MmEuNTMyLjUzMiAwIDAgMCAuMDk0LS4wOTR6bS04LjIxOCAxNS41OTRjLjE5OS4yOTcuNDMuNTg2LjY4Ny44NDRsNi45MDYgNi45MDZjLjI2Mi4yNjIuNTQzLjQ4OC44NDQuNjg4TDkuNTMxIDQ2LjkwNmMtLjA4Ni4wNzgtLjI1NC4xMzctLjUzMS4wOTQtLjI3Ny0uMDQzLS42MjktLjIyMy0uOTA2LS41TDMuNSA0MS45MDZjLS41NTktLjU2Ni0uNTYzLTEuMjYxLS40MDYtMS40Mzd6bS0yLjg3NSA4LjMxM2MtLjc3IDAtMS41NDMuMjkyLTIuMTI1Ljg3NWwtMi4xMjUgMi4xMjVhMy4wMjMgMy4wMjMgMCAwIDAgMCA0LjI1IDMuMDIzIDMuMDIzIDAgMCAwIDQuMjUgMGwyLjEyNS0yLjEyNmEzLjAyMyAzLjAyMyAwIDAgMCAwLTQuMjUgMy4wMDIgMy4wMDIgMCAwIDAtMi4xMjUtLjg3NXptMCAyYy4yNTMgMCAuNTE5LjA4Mi43MTguMjguMzk5LjQuMzk5IDEuMDQgMCAxLjQzOGwtMi4xMjUgMi4xMjVhMS4wMTQgMS4wMTQgMCAwIDEtMS40MzcgMCAxLjAxNCAxLjAxNCAwIDAgMSAwLTEuNDM3Yy40MjItLjQyMiAxLjY5OS0xLjY5NiAyLjEyNS0yLjEyNS4xOTktLjIuNDY1LS4yODIuNzE4LS4yODJ6Ii8+PC9zdmc+Cg==" class="scandit-torch-toggle scandit-hidden"><div class="scandit-camera-recovery scandit-hidden">Tap/click to resume scanning</div><div class="scandit-laser" style="left: 2.5%; width: 95%; top: 12%; height: 19%;"><img src="data:image/png;base64,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" class="scandit-hidden-opacity"><img src="data:image/png;base64,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"></div><div class="scandit-viewfinder paused scandit-hidden" style="left: 2.5%; width: 95%; top: 12%; height: 19%;"></div><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAGF005WixOocIq1mt1eerrw/BT6/L8cu69C3Hfb+EY3NkJ/tINHOU4Vl/VORxGiTOQ9DOTVjGugrVGwmdn/Zxkcv0qds/gOS9rOa6isM+Zc3TaRUsmvhQw2WDO0Z+mNoRnpEnurgjs8RLVPeD3vNkNhMz+2h1PgZP6anrxkTT69d4hhI8IHzCpX8Eb8gyrU1qOxIHJ/A0c5XqHwL7flCOL9GdK2NMR4JRv7LJmnYQvoF2OEHcsqEpY/s1YzK1JYJy7WRu8KoeGo75iMea7iWMxdncYb6CXLBq8I5jhSd7s1YBnnxzjMqLjSDv8kb6Do8+L6556OXYCpYR41RFdbWXx2NwfBrCRYU+jOO4FgBfjEsn+8EpxZBjAHHsX9Y4Tm+3EtKLFV10CPA73SrjfwPFgA0C8KlIOusILtVmHq1pil1HOsC548YcKgMpWUOHJCtbJrJZjwwi2eu7gaGnHdlu6To4DgHdIugwQIi2+GRvwogJgRByxzwF4+vqos5uNY8EBl/Cfrad6Ry3PGCoGHYCLqr94Nxx6joceeIWqfSLzNVQkQptATE0sBk+rXU9rDJ4IKZtxnMAOCQWB0byO46YNqwN3cIzRv+U6OQauAfSNd9KJ+qMkx1SUY3M2cVIFFiQl6xqaTSQW55hkpWy8Q9zs83EgY+pQOBorDiUT9gMbYOCIjWl7YmDBI2nrFmCaxURFS2YG+JlpoRYrWpT5ewlvN+MYp4Gapbm0dV7H0dKN9ak7OAaB8+U6OXaQkihgPX3jsY5yQkqJS05BWkQ+SbN14FGbkIe+ApvC/8dAZxP18IMYsZg5ngP/MPPHgD9C9K9zBXis5+j9FhL6fCMmu2R0kAV/BaWs9h3eqclf20RQntInkjLD6IYtRAKU2WQbp+NY9KK0eDtHH3CWqpNjmieRz2vDAABHjEVTiU6Izqr3pbgiruydET6Vip6yMHuMV07SluLJJfotZg6Fo9Y/gieERFNREnlm5PiIF6uSdZH5/DXinCQsRxM6OB8vtx6/evXKBWyM1Rb5T2TeXG06hEBtwSBJ6DjSMkGM38axCJxH6uRoyRFCUl0fMmthwNYpvVKjTtpPQ5YQq1Cjh0QD6WBn+6DMcbKNSgx77hqvLCYOTuGorVihOSLAWfzl6JWR498hGh1+K3+JPmG5GZVE2DiuQoaskuNrSvl7ks3fRabMOK5hh1AwPhvOcnqO/iVcBG7lOA2Qtno5WqziS8ununY8GKbL5AIKKTFL+UNSo87zR3PDAFwyngsxH3HvGA294/kNFV0oSYmsfGHkOCohyZcQFm6JbGFClDmrVhOBmlueorZvw1d7bSFrMtP3w/iDCDuefpQa9Ryp5Cvs+2/jeEDDvN54PDhwp/NNIkryUsyNhyiw5Jbo6hHerT/D8DjoOcY3Gc9LqfyRzFHjUMWj1m/DOza/SSPHI1b0Djah055V4aE2Y5BP3iwmd3GdZenktNGkPAZXRNQg7diKpvUcKd0r620cZ/CT1Ls+VsTHzi3mm6LkTEzQfwIDTH0HBS0edGEuaEl25H7IeB7pOWodz2+o+ATHrNfvRo4f2OUxnoh6jB/EEE0QF/O3iPIFXPED0so7GTEpb0c/ifpFoAWm6dQcm4GvJzdz9HvxhkzVyXECGyyTpXtOgRaR41BtGC6fEN04mhcCtrdOjtxNHK/wTOoraDNyPGSXn7Al/s5fYI2L4yxwC8cqXksCrxOF0QFjeT8FIULyu9DbZeBI8W9/uZnjAsIhYq2T4+eauhZDoUAfWm4d0jGn7wXWRJoFKlWWc4Hde8YjtwqssPmb6J4iGx1axd4DZx5bC7Yj/lvOOV9QTlL+6MNWzlhuw0diZQnnOmXkOBbGxY0cm13YIaShTo6hLWBElLxjM8Ak7TWwCqwVhT0c0MlZuCFgj65RxRkAT+8Vj6lteDJFy2YVg0aOWKKj4IbC2JYStJBp4mjtugXjGuIptuGYtmHLsDlvQTwqbca5DLblhVbhSOVA4QaO/swwlt6qovMOjsvnTwDEHf1LAK6ERWSRXILKcscwcCEsLuV1YGNuyePZGUR84T7rY9PoNoBhYK5k5HgMvOinZetnbEWkmQaFc/3BUay7ZmteeN4TnhEZssE2Mt4uGdubd2OXtNWOx2znASPHohdajp7J1xOC9dOCjSOiUp13cCwT8qbCDunfED4typ2/Kh4AG19FcZs72wLgWWpZvgBm7hOPHYTfcYRRqWav8d2gezJxAN7dc8LmK2SaSacxdSjmfR+R8wD3YVspcFnYy/5Gnmkcq8tGjpYMUFBzVMy2+5aQrKVejtw8IVPPYysrnSdZQpbZeUVTsjkWzBK+Q/p7FIv57LT47AMnngazl62Hhb3eUTs3M1RsJHw+WaQCf7KmiJgtEkJCs+7OzUBUURpvCzg1nIV1zhz/U7KXexFCInJ24QK915evWdGUsFhy1eq+fJiW2V0NmXDkltQcgzPHl5OvBXu5N0p4MsXVzdFiTwnbWmdjiCeE3ZcVZLmTpmjxZMkeIiREi/muCIlY78Nx+nCPtkzbfevCnp7jMh1FY5uAU0mB64roU0z+fEAHPK+e2WKjUiChsfNKnlCug+6owrH45YyopGde9W0ipJEKY8+JlqPffaTZz3DlkHRfY7mGPyBAldtpmBfGFuqgOMRA//c5Al+cUT6UnVG+M8kcB/I0vEjblDxW3xJKyybppcNas7J+8Wwo14qkoSfzqnjOW2WmbUQRSemImuOs3HhA33iS53VP1Up0m6iBRLncodFf6cWEah+RTCTEJhpmuXt9cHAgXG3pzPQDJbM8PKsaQ7W9D4PniYfP9Sa2mPsJAMBwyfQjgNqGgfBp6IGZKUfCf1vonmkfWiZt9ru+r1bb9++E/f9qThLNBhL5RkKsd1XN9qRIJP2AzNTSTdLJYVv+znWWZu7ow+p4ow1Ys3Snnry7Yj5rHfjfmda/AA1uqYyEPVX6AAAAAElFTkSuQmCC" class="scandit-logo"></div></div></div>
       <div class="scanner-note-modal"></div>
       <div id="scanner-components"><div class="modalComponents"><div id="alternative-products" class="modal p-0">            <div class="modal-dialog mw-100 modal-dialog-scrollable">                <div class="modal-content delist-modal w-100">                    <div class="modal-header">                        <h2 class="modal-title">Alternative products</h2>                        <button type="button" class="btn grey-btn cancel" data-dismiss="modal">                            <i class="fas fa-times"></i> Close                    </button>                    </div>                    <div id="page-content" class="modal-body">                    </div>                </div>            </div>    </div></div></div>
       <script src="/scripts/trolley.js?version=2.8.8.0"></script>
       <script src="/scripts/products.js?version=2.8.8.0"></script>
       <script src="/scripts/notes.js?version=2.8.8.0"></script>
       <script>
          function getCookieValue(cookieName) {
            var value = document.cookie.match('(^|[^;]+)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
            return value ? value.pop() : '';
          }
        </script>
      <script nonce="">

    if (typeof trolley_mode == 'undefined') {
        trolley_mode = 1;
    }

    /*window.onerror = function (message, source, lineno, colno, error) {
        console.log("Global error: " + error.message + ", lineno: " + lineno);

        try {
            logEvent('ERROR:' + error.message + ', source:' + source + ', Line:' + lineno);
        } catch (err) {
            console.error(err);
        }

        return true;
    };*/

    function logEvent(message) {
        }

    
    let scanditBarcodePicker;
    var symbologies = ["ean8","ean13","upca","upce","code128","code39","itf"];
    ScanditSDK.configure("AfvAc9OBRzaIQ7ijGAacMPcsV0INI01XdWAZIV1r1qjvLjxOvn3pqNZlK6aXcIrndEo+OhxXpIjOSwuPGQHZPtINrNaHb8hnVBXa3/ZvfPzVHjoBWwmikzJ8EcQzIcoTNEz1NMtgbsu6HEocFD40UcUHBqBNFt11lQ7NRcO/FI6OPhzOjC0bRc5qDQRIsXeStxmm6VXtsu5nJbVd3FuqyIX7hsZQB8Sjuwwj3vaLhi0j63gppTNz2bzWTYvOLK47cp5NpVasiGGfC5dcyhsY/suxHBkrdIP8Axr9MRoUaQ6NXFdMiKraLvCIN5+ENiVUzvfp9GpjpHkExczOZ0vCMUh+NhhEl+s3wFhyoyMB/HBmqrVcWCrtyUhtP/istb2F3w937ZwBZbvuiuKZLm7u9FsI8tT9KEtY1RmK0geQJYhBuUI2lmxZzoj75tgSedqQ9nrjArJvfXgzZB660WmWyDz9PRSTAcvJgygA3q+f27PJmv8OyO3l4xQamCtzkFKyS2zGtr44z3jJ6huROh09bgVD9egXXrEDxB8hfrQo8HUAGbq5PpEbEWeOI70LyteMxGFoFcmVqT1HGrPdMRdgj6KkYEo9t3PiUzOpIIGezxDsghbJQSHScNC3P2q1cHSC0R1/yjiqihTJRhSAJN8oIQ5lebWXYZ0QDCc8pJfJBqwQFVJi/VlpqFx9RO+Urk7SLh5P6d9GRz1bAZwmxR5eaqF4MGu978agwq6HE0z0wmgmEJtwswv2bES/xYxPKepDyRkZShebelsNlyOBFActq3BHEVKaQaw5HSMpCBPIxWinvzgICLhfR4j4Nmtw5L54PIOXnqLyOlo=", {
        engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build",
    })
        .then(function () {
            return ScanditSDK.BarcodePicker.create(document.getElementById("barcode-picker"), {
                scanningPaused: true,
                accessCamera: false,
                visible: false,
                playSoundOnScan: true,
                vibrateOnScan: false,
                videoFit: "cover",
                enableCameraSwitcher: false
            }).then(function (barcodePicker) {
                scanditBarcodePicker = barcodePicker;
                const scanSettings = new ScanditSDK.ScanSettings({
                    enabledSymbologies: symbologies,
                    codeDuplicateFilter: 7000,
                });

                scanSettings.setSearchArea({ x: 0, y: 0.1, width: 1, height: 0.2 });

                barcodePicker.applyScanSettings(scanSettings);
                barcodePicker.on("ready", function () {
                    document.getElementById("barcode-picker-starter-button").hidden = false;
                    //checkResumeScan();
                });

                barcodePicker.on("scan", function (scanResult) {
                    if ($('.scanner-notification').is(":hidden")) $('.scanner-notification').slideToggle();
                    //console.log(scanResult.barcodes[0].data);
                    hasSearchResults(scanResult.barcodes[0].data, handleSearchResult);
                });

                barcodePicker.on("scanError", function (error) {
                    $('.scanner-notification').addClass('bg-danger').find('p').text('An error has occured, please try again');
                    console.error(error);
                });
            });
        })
        .catch(function (error) {
            alert(error);
        });


    function startBarcodePicker() {
        if (scanditBarcodePicker.getActiveCamera()) {
            scanditBarcodePicker.pauseScanning(true);
            $('#scanner-modal').hide();
        } else {
            scanditBarcodePicker.accessCamera().then(function () {
                scanditBarcodePicker.setVisible(true).resumeScanning();
                $('#scanner-modal').attr("style", "display: block !important");
            });
        }
        initScannerMinicart();
    }

    function stopBarcodePicker() {
        scanditBarcodePicker.pauseScanning(true);
        $('#scanner-modal, .scanner-notification').hide();
        $('.scanner-notification').removeClass('bg-success').find('p').text('Searching...');
        $('.scanner-product-list .rowMode').empty();
        if ($('.scanner-note-modal') != null) {
            $('.scanner-note-modal').empty();
        }
    }
    


    function appScannerStart() {
            //try {
            //    window.flutter_inappwebview.callHandler('appScannerStart');

            //    $('.scanLine').remove();
            //    $('#scanner-modal').attr("style", "display: block !important");

            //    initScannerMinicart();
            //} catch (err) {
                startBarcodePicker();
            //}
    }

    function appScannerStop() {
        $('#scanner-modal, .scanner-notification').hide();
        $('.scanner-notification').removeClass('bg-success').find('p').text('Searching...');
        $('.scanner-product-list .rowMode').empty();
        if ($('.scanner-note-modal') != null) {
            $('.scanner-note-modal').empty();
        }
    }

    function appScanned( barcode) {
        if ($('.scanner-notification').is(":hidden")) $('.scanner-notification').slideToggle();
        hasSearchResults(barcode, handleSearchResult);
    }




    function clearSearchResults() {
        $('.scanner-notification').hide().removeClass('bg-success').find('p').text('Searching...');
        $('.scanner-product-list .rowMode').empty();
        if ($('.scanner-note-modal') != null) {
            $('.scanner-note-modal').empty();
        }
        //$('#barcode-picker').css("height", "100%");
    }

    function initScannerMinicart() {

        logEvent('initScannerMinicart');

        //get the values from the main minicart
        var colt = $('#mini-trolley-mobile #click-collect .labels p:first-child').text(),
            delt = $('#mini-trolley-mobile #delivery .labels p:first-child').text();
        //update scanner minicart
        $('#scanner-minicart').html("<div class='scanner-trolley'><img src='/images/orange-trolley.png' alt='orange trolley' width='20' class='aligin-middle'> <span class='colt mr-1'>" + colt + "</span></div><div class='scanner-truck'><img src='/images/green-truck.png' alt='green truck' width='20' class='aligin-middle'> <span class='delt'>" + delt + "</span></div>")
        console.log(colt + " " + delt);

        determineTrolleyType();

        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        var target = $('#mini-trolley-mobile')[0];
        var observer = new MutationObserver(function (mutations, observer) {
            console.log('updated');
            mutations.forEach(function (mutation) {

                var colt = $('#mini-trolley-mobile #click-collect .labels p:first-child').text(),
                    delt = $('#mini-trolley-mobile #delivery .labels p:first-child').text();

                determineTrolleyType();

                $('#scanner-minicart span.colt').text(colt);
                $('#scanner-minicart span.delt').text(delt);

            });
        });

        observer.observe(target, {
            subtree: true,
            attributes: true,
            childList: true,
            characterData: true
        });
    }

    function hasSearchResults(scanResultBarcode, handleResult) {

        logEvent('hasSearchResults:' + scanResultBarcode);

        var hasResults = true;
        $.ajax({
            type: "POST",
            url: '/api/sitecore/ProductListing/HasSearchResult',
            data: JSON.stringify({ keyword: scanResultBarcode }),
            contentType: "application/json; charset=utf-8",
            xhrFields: { withCredentials: true },
            success: function (data) {
                if (data && data.HasResults) {
                    hasResults = true;
                }
                //handleResult(scanResultBarcode, hasResults);
            }
        });
        handleResult(scanResultBarcode, hasResults);
        return hasResults;
    }

    function handleSearchResult(scanResultBarcode, hasSearchResult) {
        logEvent('handleSearchResult:' + scanResultBarcode);

        if (hasSearchResult) {
            //console.log('has results');
            setTimeout(function () {
                $.ajax({
                    type: "GET",
                    url: 'https://www.booker.co.uk/products/product-list?keywords=' + scanResultBarcode + '&barcodeScan=true',
                    success: function (data) {
                        if (data) {
                            var products = $(data).find('.rowMode .product-list').parent().html(),
                                items = $(products).find('div.product'),
                                noteModal = $(data).filter('#add-note').prop('outerHTML'),
                                count = items.length;

                            $('.scanner-notification').addClass('bg-success').find('p').addClass('text-white').text(count + ' product(s) found');

                            $('.scanner-product-list .rowMode').empty().hide().append(products);

                            $('.scanner-note-modal').empty().append(noteModal);

                            //$('#barcode-picker').height($(window).height() - $('.scanner-product-list').height());

                            logEvent('handleSearchResult:count:' + count);
                        }
                    }
                });
            }, 300);
        } else {
            $('.scanner-notification').addClass('bg-danger').find('p').text('Product could not be found');
            //console.log('No search results for that scan');

            logEvent('handleSearchResult:' + scanResultBarcode + ':Product Not Found');
        }
    }

    function determineTrolleyType() {
        if (false) {
            changeToClickAndCollectTrolley();
        }
        else {
            changeToDeliveryTrolley();
        }
    }

    function changeToClickAndCollectTrolley() {
        $('.scanner-header').addClass("scanner-header-orange");
        $('.scanner-header').removeClass("scanner-header-green");

        $('#scanner-modal').addClass("scanner-modal-orange");
        $('#scanner-modal').removeClass("scanner-modal-green");

        $('.modalComponents').addClass("modalComponentsOrange");

        $("#scanner-minicart .scanner-trolley").show();
        $("#scanner-minicart .scanner-truck").hide();
    }

    function changeToDeliveryTrolley() {
        $('.scanner-header').addClass("scanner-header-green");
        $('.scanner-header').removeClass("scanner-header-orange");

        $('#scanner-modal').addClass("scanner-modal-green");
        $('#scanner-modal').removeClass("scanner-modal-orange");

        $('.modalComponents').removeClass("modalComponentsOrange");

        $("#scanner-minicart .scanner-truck").show();
        $("#scanner-minicart .scanner-trolley").hide();
    }

    $(document).ready(function () {
        var altProductsModal = $("#alternative-products");
        if (altProductsModal == null || altProductsModal.length == 0) {
            $("#scanner-components").html('<div class="modalComponents"><div id = "alternative-products" class= "modal p-0" >            <div class="modal-dialog mw-100 modal-dialog-scrollable">                <div class="modal-content delist-modal w-100">                    <div class="modal-header">                        <h2 class="modal-title">Alternative products</h2>                        <button type="button" class="btn grey-btn cancel" data-dismiss="modal">                            <i class="fas fa-times"></i> Close                    </button>                    </div>                    <div id="page-content" class="modal-body">                    </div>                </div>            </div>    </div ></div >');
        };
    });

    $(".scanner-picker").keypress(
        function (event) {
            if (event.which == '13') {
                event.preventDefault();
            }
        });

</script>

`;


let newSearchInputHtml = `
  <div class="input-group-prepend documentSearchPrepend">
    <button class="btn btn-outline-secondary dropdown-toggle documentSearchBtn" type="button" data-toggle="dropdown" data-target="products" aria-haspopup="true" aria-expanded="false">Products</button>
    <ul class="dropdown-menu text-center border-top-0 m-0 p-0">
      <li class="dropdown-item" data-target="products">Products</li>
      <li class="dropdown-item" data-target="documents">Documents</li>
    </ul>
  </div>

  <input name="keywords" type="text" class="suggestion-keywords form-control" placeholder="Search by Product code, description or barcode">
  <div class="suggestions-result" style="display: none">
       
  </div>
  <div class="input-group-append search-button">
    <button class="btn btn-outline-secondary" type="submit">
      <i class="fas fa-search fa-lg" onclick="$(this).closest('form').submit();"></i>
    </button>
  </div>
`;



[...searchInput].map(search => {

  search.innerHTML = newSearchInputHtml;
});

  let suggestionResults = document.querySelectorAll('.suggestions-result');

  let productDocumentUl = document.querySelectorAll('.documentSearchPrepend');

  let selectedOption;

  [...productDocumentUl].map(product => {
    product.addEventListener('click', (event) => {
      let selected = event.target.getAttribute('data-target');     
      if (selected == null) return;
      
      let options = document.querySelectorAll('.documentSearchPrepend .dropdown-menu');
      [...options].map(option => {
        let lis = option.getElementsByTagName('li');
        [...lis].map(li => {
          if (li.getAttribute('data-target') == selected) {
            li.classList.add('d-none');
          } else {
            li.classList.remove('d-none');
          }
        })

      });
    
      let documentSearchBtns = document.querySelectorAll('.documentSearchBtn');
      [...documentSearchBtns].map(btn => {
        btn.innerHTML = selected.charAt(0).toUpperCase() + selected.slice(1);
        
      })
      placeholderChange(selected);
    });
  });


  const placeholderChange = (value) => {
    [...suggestionResults].map(results => {
      results.innerHTML = '';
      let sdd = document.getElementsByName('keywords');

      if (value == 'products') {
        sdd[1].placeholder = 'Search by product code, description, or barcode'; 
        sdd[2].placeholder = 'Search by product code, description, or barcode'; 
      } else {
        sdd[1].placeholder = 'Search for content using keywords or a phrase';
        sdd[2].placeholder = 'Search for content using keywords or a phrase';
      }

    });
  }


  const loadSearchProducts = () => {
    let html = ``;
    searchProducts.map(product => {
      html += `
        <div class="keywordsuggestion row d-flex justify-content-center align-items-center py-3">
          <div class="col-lg-12 col-xl-1 productImg">
            <div><img src="${product.img}"></div>
          </div>
          <div class="col-lg-12 col-xl-8 productDetails">
            <div>
              <a class="searchUrl" href="/products/search?keywords=${product.description}">${product.description}</a>
              <p class="volume">Case of ${product.volume}</p>
            </div>
          </div>
          <div class="col-lg-12 col-xl-3 priceRrp">
            <p class="price">&pound;${product.price}</p>
            <p class="rrp">RRP: &pound;${product.rrp}</p>
          </div>
        </div>
      `;
    });
    return html;
  }

  const loadSearchDocuments = () => {
    let html = ``;
    searchDocuments.map(document => {
      html += `
        <div class="keywordsuggestion row d-flex justify-content-center align-items-center py-3">
          <div class="col-xs-12 col-xl-1">
            ${document.icon}
          </div>
          <div class="col-xs-12 col-xl-11">
            <a href="/documents/search?name=${document.description}">${document.description}</a>
            <p class="category">${document.category}</p>
          </div>
        </div>
      `;
    });
    return html;
}

let searchInputs = document.querySelectorAll('#search-input input[type=text]');
[...searchInputs].map(search => {
  search.addEventListener('blur', () => {
    $('.suggestions-result').fadeOut();
  });
  
});
