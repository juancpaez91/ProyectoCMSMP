//Array con tazas
const Tazas = [
    {
        Id:"T001" , Nombre:"Taza Valiente", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102991/CMSMP/tazas/Taza-Valiente_wzivlj.jpg"
    },
    {
        Id:"T002" , Nombre:"Taza Transformación", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102991/CMSMP/tazas/Taza-Transformacion_av4fz0.jpg"
    },
    {
        Id:"T003" , Nombre:"Taza Sueña", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102991/CMSMP/tazas/Taza-Sue%C3%B1a_b5wysq.jpg"
    },
    {
        Id:"T004" , Nombre:"Taza Somos Así", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102991/CMSMP/tazas/Taza-Somos-Asi_js5n6f.jpg"
    },
    {
        Id:"T005" , Nombre:"Taza Piensa en Ti", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102991/CMSMP/tazas/Taza-Piensa-en-Ti_ystkf1.jpg"
    },
    {
        Id:"T006" , Nombre:"Taza Mujer", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Mujer_xj3r36.jpg"
    },
    {
        Id:"T007" , Nombre:"Taza Mujer Divina", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Mujer-Divina_hdgqvr.jpg"
    },
    {
        Id:"T008" , Nombre:"Taza Maravillosa", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Maravillosa_z2gwcp.jpg"
    },
    {
        Id:"T009" , Nombre:"Taza Lo Podemos Lograr", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Lo-Podemos-Lograr_p2qiix.jpg"
    },
    {
        Id:"T010" , Nombre:"Taza Empoderamiento", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Empoderamiento_rpw4ff.jpg"
    },
    {
        Id:"T011" , Nombre:"Taza Corazones", Precio: 12000, Stock:10, picture:"https://res.cloudinary.com/sapphiredev/image/upload/v1635102990/CMSMP/tazas/Taza-Corazones_phtfb5.jpg"
    }
];

let tazaComprar;
function ObtenerTaza (clickeado){
    localStorage.clear();
    let objetoTaza = Tazas.find( e => e.Id == clickeado);
    tazaComprar = objetoTaza;
    localStorage.setItem("tazaComprar", JSON.stringify(tazaComprar));
    console.log(tazaComprar);
    location.href = "tazas.html";
}



