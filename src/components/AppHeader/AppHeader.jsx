import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import style from "./AppHeader.module.css";
import Container from "@mui/material/Container";
import SvgIcon from "@mui/material/SvgIcon";

function AppHeader() {
  return (
    <>
      <Box
        sx={{
          p: 2,
          background:
            "linear-gradient(81deg, #E7F0FF 9.01%, rgba(232, 241, 255, 0.47) 89.11%)",
        }}
      >
        <Container maxWidth="lg">
          <div className={style.appHeaderWrap}>
            <div className={style.appHeaderLogo}>
              <div className={style.appHeaderIconWrap}>
                <SvgIcon sx={{ fontSize: "14px" }}>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.862605 2.83005C2.90469 2.8023 4.76526 2.02253 6.1804 0.754883C7.59554 2.02253 9.45611 2.8023 11.4982 2.83005C11.5724 3.27214 11.611 3.72632 11.611 4.18951C11.611 7.73924 9.34424 10.759 6.1804 11.8782C3.01656 10.759 0.749847 7.73924 0.749847 4.18951C0.749847 3.72632 0.788449 3.27214 0.862605 2.83005ZM8.66862 5.32103C8.91811 5.07133 8.91811 4.66645 8.66862 4.41676C8.41913 4.16707 8.01459 4.16707 7.7651 4.41676L5.50158 6.68215L4.5957 5.77552C4.34622 5.52583 3.94167 5.52583 3.69219 5.77552C3.4427 6.02522 3.4427 6.4301 3.69219 6.67979L5.04983 8.03855C5.29931 8.28824 5.70386 8.28824 5.95334 8.03855L8.66862 5.32103Z"
                      fill="white"
                    />
                  </svg>
                </SvgIcon>
              </div>
              <div>Medify</div>
            </div>
            <div className={style.appHeaderLinks}>
              <div>Find Doctors</div>
              <div>Hospital</div>
              <div>Medicines</div>
              <div>Surgeries</div>
              <div>Software for Provider</div>
              <div>Facilities</div>
              <Button
                className={style.appHeaderButton}
                variant="contained"
                style={{ textTransform: "capitalize" }}
              >
                My Bookings
              </Button>
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default AppHeader;