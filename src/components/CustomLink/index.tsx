import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { Button as ChakraLink, LinkProps } from "@chakra-ui/react";

interface CustomNavLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomNavLinkProps> = ({ to, children }) => {
  const location = useLocation();
  const active = location.pathname;

  return (
    <ReactRouterLink to={to}>
      <ChakraLink
        as={"a"}
        variant={"ghost"}
        color={active === to ? "yellow.500" : undefined}
        fontWeight={active === to ? "bold" : undefined}
      >
        {children}
      </ChakraLink>
    </ReactRouterLink>
  );
};
