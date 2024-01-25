/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import Lottie from 'lottie-react';
import Link from 'next/link';
import basketballSpinAnimation from 'public/assets/lottiefiles/58686-basketball-spin.json';
import basketballBounceAnimation from 'public/assets/lottiefiles/61180-baseketball-bounce.json';

interface LeagueBoardProps {
  teamData?: any;
  scheduleData?: any;
  location?: any;
  league?: any;
}

const LeagueBoard: React.FC<LeagueBoardProps> = ({
  league,
  teamData,
  scheduleData,
  location,
}) => {
  const groupedData =
    scheduleData?.reduce((groups: any, item: any) => {
      if (item.league === league.leagueId) {
        const date = item['date-time'].split('T')[0]; // Extracting the date part
        if (!groups[date]) {
          groups[date] = {
            // eslint-disable-next-line object-shorthand
            date: date,
            items: [],
          };
        }
        groups[date].items.push(item);
      }
      return groups;
    }, {}) || null;

  const groupedArray: { date: string; items: any }[] = [];

  if (groupedData) {
    Object.values(groupedData).forEach((group: any) => {
      groupedArray.push(group);
    });
  }

  // Function to format the date to 'F j, Y'
  function formatDate(dateString: any) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
  }

  // Updating date format in groupedArray
  groupedArray.forEach((group) => {
    group.date = formatDate(group.date);
  });

  groupedArray.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateA - dateB;
  });

  const handleTabs = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const tabsNav = document.querySelectorAll('.tabs-block li a');
    tabsNav.forEach((tabNav) => {
      tabNav.classList.remove('active');
    });
    const matchID = event.currentTarget.className;
    event.currentTarget.classList.add('active');
    const tabs = document.querySelectorAll('.tab-pane');
    tabs.forEach((tabItem) => {
      tabItem.classList.remove('active');
      if (matchID === tabItem.id) {
        tabItem.classList.add('active');
      }
    });

    const position = event.currentTarget.parentElement?.offsetLeft;
    const width = event.currentTarget.parentElement?.offsetWidth;
    const slider = document.querySelector('.active-slide') as HTMLElement;
    if (position && width && slider) {
      slider.style.left = `${position}px`;
      slider.style.width = `${width}px`;
    }

    const activeTabWidth = document.querySelector('.tabs-block .active')
      ?.parentElement?.offsetWidth;
    const activeTabPositionL = document.querySelector(
      '.tabs-block .active'
    ) as HTMLElement;
    if (activeTabPositionL) {
      const activeTabPosition = activeTabPositionL.offsetLeft;
      if (activeTabWidth && activeTabPosition && slider) {
        slider.style.left = `${activeTabPosition}px`;
        slider.style.width = `${activeTabWidth}px`;
      }
    }
  };
  return (
    <div className="leagues-board-standings-section">
      <div className="overlay-bg-img">
        <img
          src="/assets/images/leagues-board-standings-bg-img.png"
          alt="image"
        />
      </div>
      {/* <div className="container mx-auto px-4"> */}

      <div className="leagues-board-standings-block">
        {groupedArray.length > 0 && (
          <div className="leagues-board-block" id="scheduleSection">
            <div className="tab-main-block">
              <div className="container mx-auto px-4">
                <ul className="tabs-block">
                  <div className="active-slide">
                    <div className="basketball-bounce-animation">
                      <Lottie
                        animationData={basketballBounceAnimation}
                        loop
                        autoplay
                      />
                    </div>
                  </div>
                  {groupedArray.map((item: any, index: any) => {
                    return (
                      <li key={`tab-${index}`}>
                        <Link
                          href=""
                          className={
                            index === 0
                              ? `weekContent${item.date} active`
                              : `weekContent${item.date}`
                          }
                          onClick={handleTabs}
                        >
                          {`${item.date !== 'undefined' ? item.date : ''}`}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="container mx-auto px-4">
              <div className="tabs-content-block">
                {groupedArray.map((item: any, index: any) => {
                  return (
                    <div
                      className={index === 0 ? 'tab-pane active' : 'tab-pane'}
                      id={`weekContent${item.date}`}
                      key={`tabContent-${index}`}
                    >
                      {item?.items?.map((tData: any, j: any) => {
                        const teamDetail = {
                          'home-team': '1675361005674x288520961962278900',
                          'away-team': '1677085857479x888760045630128100',
                        };

                        let homeTeam = null;
                        let awayTeam = null;

                        // Function to find team and logo by ID
                        const findTeamAndLogo = (teamId: any) => {
                          const team =
                            teamData?.find(
                              (itemT: any) => itemT._id === teamId
                            ) || null;
                          return team
                            ? {
                                name: team?.name || null,
                                logo: team?.teamLogo || null,
                              }
                            : null;
                        };

                        homeTeam = findTeamAndLogo(teamDetail['home-team']);
                        awayTeam = findTeamAndLogo(teamDetail['away-team']);

                        const date = new Date(tData['date-time']);

                        // Formatting the date
                        const options: any = {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        };
                        const formattedDate = date.toLocaleDateString(
                          'en-US',
                          options
                        );

                        // Formatting the time with AM/PM
                        const timeOptions: any = {
                          hour: '2-digit',
                          minute: '2-digit',
                          hour12: true,
                        };
                        const formattedTime = date.toLocaleTimeString(
                          'en-US',
                          timeOptions
                        );
                        const teamLocation = tData?.location || null;
                        const locationName = teamLocation
                          ? location?.find((x: any) => x._id === teamLocation)
                          : null;
                        return (
                          <div className="board-card-box" key={`tabInner-${j}`}>
                            <div className="item-box">
                              <div className="heading-box">
                                <h4 className="heading">
                                  {locationName?.address?.address}
                                </h4>
                              </div>
                              <div className="content-box hidden md:flex">
                                <div className="team-info-box">
                                  <div className="img-box">
                                    <img
                                      src={
                                        homeTeam?.logo ||
                                        '/assets/images/bb-logo1.svg'
                                      }
                                      alt="bb logo"
                                    />
                                  </div>
                                  <span className="team-name">
                                    {homeTeam?.name}
                                  </span>
                                </div>
                                <div className="timer-box live">
                                  <div className="score">
                                    {`${formattedTime}`}
                                  </div>
                                  <div className="live-status">
                                    <span>{`${formattedDate} `}</span>
                                  </div>
                                </div>
                                <div className="team-info-box">
                                  <span className="team-name">
                                    {awayTeam?.name}
                                  </span>
                                  <div className="img-box">
                                    <img
                                      src={
                                        awayTeam?.logo ||
                                        '/assets/images/bb-logo2.svg'
                                      }
                                      alt="bb logo"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="content-box flex md:hidden">
                                <div className="timer-box live">
                                  <div className="time">
                                    {`${formattedTime}`}{' '}
                                    <small className="block whitespace-nowrap">{`${formattedDate}`}</small>
                                  </div>
                                </div>

                                <div className="team-info-block">
                                  <div className="info-score-box">
                                    <div className="team-info-box">
                                      <div className="img-box">
                                        <img
                                          src={
                                            homeTeam?.logo ||
                                            '/assets/images/bb-logo1.svg'
                                          }
                                          alt="bb logo"
                                        />
                                      </div>
                                      <span className="team-name">
                                        {homeTeam?.name}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="info-score-box">
                                    <div className="team-info-box">
                                      <div className="img-box">
                                        <img
                                          src={
                                            awayTeam?.logo ||
                                            '/assets/images/bb-logo2.svg'
                                          }
                                          alt="bb logo"
                                        />
                                      </div>
                                      <span className="team-name">
                                        {awayTeam?.name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {teamData && (
          <div className="container mx-auto px-4" id="standingSection">
            <div className="leagues-standings-block">
              <div className="heading-box">
                <div className="heading">
                  <h2>
                    Standings <span>Play it up, guys!</span>
                  </h2>
                </div>
                <div className="basketball-spin-animation">
                  <Lottie
                    animationData={basketballSpinAnimation}
                    loop
                    autoplay
                  />
                </div>
              </div>
              <div className="standings-content-block">
                <table>
                  <thead>
                    <tr>
                      <th>position</th>
                      <th>team</th>
                      <th>gp</th>
                      <th>w</th>
                      <th>l</th>
                      <th>Ties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamData.map((item: any, index: any) => {
                      return (
                        <tr key={`t-row${index}`}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="team-name-box">
                              <img
                                src={
                                  item.teamLogo
                                    ? item.teamLogo
                                    : '/assets/images/bb-logo1.svg'
                                }
                                alt="bb logo"
                              />
                              {item?.name && (
                                <span className="team-name">{item.name}</span>
                              )}
                            </div>
                          </td>
                          <td>{item?.gamesPlayed ? item.gamesPlayed : 0}</td>
                          <td>{item?.wins ? item.wins : 0}</td>
                          <td>{item?.loses ? item.loses : 0}</td>
                          <td>{item?.ties ? item.ties : 0}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* </div> */}
    </div>
  );
};

export default LeagueBoard;
