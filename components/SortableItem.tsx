"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "react-bootstrap";

export default function SortableItem({ id, app }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <Card ref={setNodeRef} style={style} {...attributes} {...listeners} className="mb-2 p-2 shadow-sm">
      <Card.Body>
        <Card.Title>{app.position}</Card.Title>
        <Card.Subtitle className="text-muted">{app.company}</Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
