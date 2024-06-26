import { InputBase, Box, styled } from "@mui/material";

const Component = styled(Box)`
   /* Dark mode border color */
  height: 45px;
  background:black; /* Dark mode background color */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  

`;

const Wrapper = styled(Box)`
  background: black; /* Dark mode background color for the wrapper */
  position: relative;
  margin: 0 13px;
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

const Icon = styled(Box)`
  position: absolute;
  padding: 8px;
  color: #b0b0b0; /* Lighter color for the icon */
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 8px 8px 8px 40px; /* Adjusted padding for proper spacing */
  font-size: 14px;
  color: #fff; /* White text color for dark mode */
`;

function Search({ setText }) {
  return (
    <Component>
      <Wrapper>
        <Icon>
          <span data-icon="search">
            <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet">
              <title>search</title>
              <path fill="currentColor" d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"></path>
            </svg>
          </span>
        </Icon>
        <InputField
          placeholder="Search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Wrapper>
    </Component>
  );
}

export default Search;
