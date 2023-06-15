const barContainer = document.querySelector('#barContainer');
const currentDay=new Date().getDay()-1;
let popup
let data
// create bar
function createBar(day,amount,index){
    const div=document.createElement('div')
    div.className='flex flex-col items-center '
    const inner=document.createElement('div')
    inner.className=`bg-softRed w-9 md:w-12 relative animate-increaseBar rounded-md bar cursor-pointer origin-bottom`
    inner.id=index
    inner.style.height=(amount * 3) +'px'
    div.append(inner)
    const p=document.createElement('p')
    p.className='text-mediumBrown text-sm mt-3 animate-textClip'
    p.innerHTML=day
    div.append(p)
    barContainer.append(div);
}
async function getData(){
    const res= await fetch('./data.json');
    data = await res.json()
    for(let i= 0; i<data.length;i++){
        createBar(data[i].day,data[i].amount,i)
    }
    allBar = barContainer.querySelectorAll('.bar')
    
    allBar.forEach((bar)=>{
        if(data[currentDay].day == bar.nextElementSibling.textContent){
            bar.classList.add('active');   
        }
        else{
            bar.classList.remove('active');  
        }
        bar.addEventListener('mouseover',function(e){
                bar.classList.add('hoverTransition');  
                popup =document.createElement('div')
                popup.className = 'bg-darkBrown text-cream px-[0.29rem]  py-1 absolute -top-16 -left-2 rounded-md text-[0.9rem] md:text-lg font-extrabold animate-fromTop'
                popup.textContent='$'+data[+e.target.id].amount
                bar.append(popup)
        })
        bar.addEventListener('mouseout',function(e){
            popup.classList.remove('animate-fromTop')
            bar.classList.remove('hoverTransition'); 
            popup.remove()
        })
    })
}
getData();