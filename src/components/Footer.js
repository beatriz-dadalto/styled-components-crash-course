import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />

        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              reprehenderit repellat quod quibusdam, voluptates nisi cupiditate
              aperiam suscipit provident?
            </li>
            <li>11 99999-8996</li>
            <li>example@huddle.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>Whats We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Carrer</li>
            <li>Blog</li>
            <li>Cantact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2023 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
