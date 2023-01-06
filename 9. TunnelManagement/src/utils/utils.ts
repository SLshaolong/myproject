export function dateFormart (value:number):string{
    const date=new Date(value )
    
    const year=date.getFullYear();    
    const mouth=(date.getMonth()+1)>10?date.getMonth()+1:'0'+(date.getMonth()+1);
    const day=date.getDate()<10?`0${date.getDate()}`:date.getDate()
    
    return `${year}-${mouth}-${day}`
}