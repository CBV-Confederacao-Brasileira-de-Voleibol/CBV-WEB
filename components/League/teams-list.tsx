interface TeamsProps{
  name_time: string;
  liga: string;
  escudo: string;
}

export function LeagueContainer(league:TeamsProps){
    return(
        <div>
          <h1>{league.name_time}</h1>
          <p>{league.liga}</p>
          <a href="Teams-details"><p>{league.escudo}</p></a>
        </div>
    )
  }

