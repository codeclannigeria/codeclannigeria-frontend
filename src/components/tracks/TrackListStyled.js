import styled from "styled-components";

export const TrackListStyled = styled.div`
    .tracks-card-group {
  margin: 14px 0 0 -30px;
  width: calc(100% + 30px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tracks-card-group .track-card {
  width: 350px;
  margin: 30px 0 0 30px;
  min-height: 346px;
  border-radius: 8px;
  padding: 40px 32px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
}
.tracks-card-group > .track-card:nth-of-type(1) {
  background-color: #fdf5f2;
}
.tracks-card-group > .track-card:nth-of-type(2) {
  background-color: #f2f7fb;
}
.tracks-card-group > .track-card:nth-of-type(3) {
  background-color: #fcf9f2;
}
.track-card h5 {
  font-family: 'Zilla Slab', serif;
  font-weight: 600;
  font-size: 24px;
}
.track-card a {
  color: #131b49;
  font-size: 12px;
  font-family: 'Libre Franklin', serif;
}
`

export default TrackListStyled;