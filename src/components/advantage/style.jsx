import styled, { device, themeGet } from "@theme/utils";
export const AdvantageContainer = styled.div`
  display: block !important;
  max-width: 270px;
  padding: 20px;
  border: 1px solid #eee; 
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-align: center;

  h3 {
    min-height: 54px;
    font-size: 20px;
    font-weight: bold;
    margin: 25px 0 10px;
  }

  p {
    font-size: 12px;
  }
`
