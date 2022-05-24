interface TeamsProps{
  name_time: string;
  liga: string;
  escudo: string;
}

export function LeagueContainer(league:TeamsProps){
    return(
        <div>
          <a href="#"><h1>{league.name_time}</h1></a>
          <p>{league.liga}</p>
          <p>{league.escudo}</p> 
        </div>
    )
  }

