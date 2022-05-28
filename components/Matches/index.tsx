import { IconButton, List, ListItem, Tab, Tabs, } from "@mui/material";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import {IoChevronForwardSharp, IoChevronBackSharp} from "react-icons/io5"
import styles from "./Matches.module.scss"


interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
}


const mockedData = {
    1: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    2: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 5,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    3: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    4: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    5: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    6: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
    7: [{
      id: 1,
      team1: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 1,
        total: 3,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      },
      team2: {
        img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
        id: 2,
        total: 0,
        sets: [
          {
            id: 1,
            points: 20
          },
          {
            id: 2,
            points: 10
          },
          {
            id: 3,
            points: 10
          },
          null,
          null,
        ]
      }
    }],
}

const mockedData2 = {
  quartas: [{
    id: 1,
    team1: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 1,
      total: 5,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    },
    team2: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 2,
      total: 0,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    }
  }],
  semis: [{
    id: 1,
    team1: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 1,
      total: 3,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    },
    team2: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 2,
      total: 0,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    }
  }],
  final: [{
    id: 1,
    team1: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 1,
      total: 3,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    },
    team2: {
      img: "https://logodownload.org/wp-content/uploads/2017/02/cruzeiro-logo-0.png",
      id: 2,
      total: 0,
      sets: [
        {
          id: 1,
          points: 20
        },
        {
          id: 2,
          points: 10
        },
        {
          id: 3,
          points: 10
        },
        null,
        null,
      ]
    }
  }],
}

const roundDictionary ={
  0: "Quartas de final",
  1: "Semi-final",
  2: "Final",
}

const reverseDictionary = {
  0: 'quartas',
  1: 'semis',
  2: 'final',
}

export function Matches() {
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [tab, setTab] = useState<number>(0);
  const router = useRouter()

  return (
    <>
    <Tabs>
      <Tab  label="Pontos corridos" onClick={() => setTab(0)} />
      <Tab label="Mata-Mata" onClick={() => setTab(1)} />
    </Tabs>
    <TabPanel value={tab} index={0}>
      <div className={styles.header}>
      <h3>{`Round ${currentRound}`}</h3>
        <div>
          <IconButton onClick={() => setCurrentRound(currentRound - 1)} disabled={currentRound === 1}>
            <IoChevronBackSharp/>
          </IconButton>
          <IconButton onClick={() => setCurrentRound(currentRound +1)} disabled={currentRound >= 13}>
            <IoChevronForwardSharp/>
          </IconButton>
        </div>
      </div>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          borderRadius: 4,
        }}
      >
        {mockedData[currentRound].map((item) => (
          <ListItem key={item.id}>
            <div onClick={() => router.push(`/result/${item.id}`)} className={styles.match}>
              <div className={styles.team}>
                <img src={item.team1.img} alt=""  />
                <strong>{item.team1.total}</strong>
                {[0,1,2,3,4].map((i) => (
                  item.team1.sets[i] ? <span key={item.team1.sets[i].id}>{item.team1.sets[i].points}</span> : <span>-</span>
                ))}
              </div>
              <div className={styles.team}>
              <img src={item.team2.img} alt=""  />
                <strong>{item.team2.total}</strong>
                {[0,1,2,3,4].map((i) => (
                  item.team2.sets[i] ? <span key={item.team2.sets[i].id}>{item.team2.sets[i].points}</span> : <span>-</span>
                ))}
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </TabPanel>
    <TabPanel value={tab} index={1}>
      <div className={styles.header}>
      <h3>{roundDictionary[currentPhase]}</h3>
        <div>
          <IconButton onClick={() => setCurrentPhase(currentPhase - 1)} disabled={currentPhase === 0}>
            <IoChevronBackSharp/>
          </IconButton>
          <IconButton onClick={() => setCurrentPhase(currentPhase +1)} disabled={currentPhase >= 2}>
            <IoChevronForwardSharp/>
          </IconButton>
        </div>
      </div>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 300,
          borderRadius: 4,
        }}
      >
        {mockedData2[reverseDictionary[currentPhase]].map((item) => (
          <ListItem key={item.id}>
            <div onClick={() => router.push(`/result/${item.id}`)} className={styles.match}>
              <div className={styles.team}>
                <img src={item.team1.img} alt=""  />
                <strong>{item.team1.total}</strong>
                {[0,1,2,3,4].map((i) => (
                  item.team1.sets[i] ? <span key={item.team1.sets[i].id}>{item.team1.sets[i].points}</span> : <span>-</span>
                ))}
              </div>
              <div className={styles.team}>
              <img src={item.team2.img} alt=""  />
                <strong>{item.team2.total}</strong>
                {[0,1,2,3,4].map((i) => (
                  item.team2.sets[i] ? <span key={item.team2.sets[i].id}>{item.team2.sets[i].points}</span> : <span>-</span>
                ))}
              </div>
            </div>
          </ListItem>
        ))}
      </List>
    </TabPanel>
    </>
  );

}