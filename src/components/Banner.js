
export const Banner = ({title, subTitle})=>{

    return(
        <div class="p-3 mb-2 bg-primary text-white text-center">
           <h1>{title}</h1>
           <h2 class="fs-5">{subTitle}</h2>
       </div>
    )
}