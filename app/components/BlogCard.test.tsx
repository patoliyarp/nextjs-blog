import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogCard from "./BlogCard";

vi.mock("next/link", () => {
  return {
    default: ({
      href,
      children,
    }: {
      href: string;
      children: React.ReactNode;
    }) => <a href={href}>{children}</a>,
  };
});

describe("BlogCard", () => {
  it("renders title/body and links to the blog detail page", () => {
    render(
      <BlogCard
        id="42"
        title="Hello World"
        body="Post preview text"
        userId={1}
      />,
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Post preview text")).toBeInTheDocument();

    const link = screen.getByRole("link", { name: /view/i });
    expect(link).toHaveAttribute("href", "/blogs/42");
  });
});
