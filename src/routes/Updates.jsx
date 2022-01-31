import { Container } from '@mui/material';
import { DataContext } from 'hooks';
import React, { useContext } from 'react';
import ReactMarkdown from "react-markdown";
import styled from 'styled-components';
import { MarkdownRenderer } from 'utils/markdown';
import Typography from '@mui/material/Typography';

const StyledRules = styled.div`
  h1:not(:first-child) {
    margin-top: 1.5em;
  }
  h1 {
    font-size: 20pt;
    font-weight: bold;
    border-bottom: 4px solid rgb(57, 110, 158);
    padding-bottom: 0.25rem;
  }
  h2 {
    font-size: 18pt;
    border-bottom: 2px solid rgb(57, 110, 158);
    margin-top: 0.5em;
    padding-bottom: 0.25rem;
  }
  h3 {
    font-size: 16pt;
  }
  h4 {
    font-weight: bold;
    font-size: 12pt;
  }
  h5 {
    font-weight: bold;
    font-size: 12pt;
  }
  p {
    break-inside: "avoid-column";
    page-break-inside: avoid; /* For Firefox. */
    -webkit-column-break-inside: avoid; /* For Chrome & friends. */
    break-inside: avoid; /* For standard browsers like IE. :-) */
  }
`;

export default function QuickRules(props) {
  const [{ data: nope }] = useContext(DataContext);
  const { updates } = nope;
  const mdRenderer = React.useMemo(() => (MarkdownRenderer({useToc: false})), []);
  return (
    <Container>
      <>
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>{`Game Updates`}</Typography>
        <div className="unit-card" style={{ marginBottom: '15px', borderColor: 'rgb(57, 110, 158)' }}>
          <div className="unit-card-body">
            <StyledRules className="rule-text">
              <ReactMarkdown components={mdRenderer} children={updates} />
            </StyledRules>
          </div>
        </div>
      </>
    </Container>
  );
}
