'use client';
import React, { useState, useEffect } from "react";
import { User } from "@prisma/client";
import axios from "axios";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectLabel,
    SelectGroup
  } from "@/components/ui/select"
  
const AssigneeSelect = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get<User[]>('/api/users');
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Assign Staff" className="text-[#56647b]" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
    <SelectLabel>Staff</SelectLabel>
   
            {users?.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.name}
              </SelectItem>
            ))}
    </SelectGroup>
  </SelectContent>
</Select>

    );
};

export default AssigneeSelect;
