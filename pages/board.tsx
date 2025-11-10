"use client";
import "../styles/board.css";
import { useState, useEffect } from "react";
import axios from "../utils/axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "../components/SortableItem";

const STATUSES = ["Applied", "Interviewing", "Offer", "Rejected", "Archived"];

export default function Board() {
  const [apps, setApps] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/applications", { withCredentials: true }).then(res => setApps(res.data));
  }, []);

  const handleDragEnd = async (event: any) => {
    const { active, over } = event;
    if (!over) return;
    const appId = parseInt(active.id);
    const newStatus = over.id;
    await axios.patch(`/api/applications/${appId}`, { status: newStatus }, { withCredentials: true });
    setApps(apps.map(a => (a.id === appId ? { ...a, status: newStatus } : a)));
  };

  return (
    <Container fluid className="mt-4">
      <Row>
        {STATUSES.map(status => (
          <Col key={status}>
            <h4 className="text-center mb-3">{status}</h4>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
              <SortableContext items={apps.filter(a => a.status === status)} strategy={verticalListSortingStrategy}>
                {apps.filter(a => a.status === status).map(a => (
                  <SortableItem key={a.id} id={a.id.toString()} app={a} />
                ))}
              </SortableContext>
            </DndContext>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
