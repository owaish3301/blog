import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Root container component for a card layout.
 *
 * Renders a div with base card styling and a `data-slot="card"` attribute. Accepts any div props and merges a provided `className` with the component's default classes.
 *
 * @param className - Additional CSS class names to append to the card's default classes
 * @returns The card root div element with default styling and `data-slot="card"`
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * Header region container for a Card component.
 *
 * @param className - Additional CSS class names to merge with the header's base styles
 * @returns The header div element with data-slot="card-header" and composed layout classes
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a div that serves as the card title slot with tight leading and semibold title typography and a `data-slot="card-title"` attribute.
 *
 * @returns The div element representing the card title slot.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's description area with muted, small text styling.
 *
 * @returns A div element with `data-slot="card-description"` styled for muted, small descriptive text.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

/**
 * Renders the card's action area positioned inside the card grid.
 *
 * @param className - Additional CSS classes appended to the component's base classes
 * @returns A `div` element for the card action slot (`data-slot="card-action"`)
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders the card's main content area.
 *
 * @returns A div element with `data-slot="card-content"`, horizontal padding, and a composed `className` including any additional classes passed via props.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * Renders the card footer container.
 *
 * @param className - Additional CSS classes to merge with the footer's base classes
 * @returns A div element with data-slot="card-footer" and footer layout and spacing classes applied
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}