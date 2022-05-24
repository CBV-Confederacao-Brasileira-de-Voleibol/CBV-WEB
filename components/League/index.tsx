interface leagueProps{
  name: string;
  description: string;
  dateStart: Date;
  DateEnd: Date;
  type: string
}

export function LeagueContainer(league:leagueProps){
  return(
      <div>
        <a href="#"><h1>{league.name}</h1></a>
        <p>{league.description}</p>
        <p>{league.dateStart.toString()}</p>
        <p>{league.DateEnd.toString()}</p>
        <p>{league.type}</p>
      </div>
  )
}