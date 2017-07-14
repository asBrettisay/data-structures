class Node:
  def __init__(self, val):
    self.val = val
    self.prev = None
    self.next = None

  def insertAfter(self, node):
    if self.next:
      node.next = self.next
      node.next.prev = self
    
    self.next = node
    node.prev = self
    
  def insertBefore(self, node):
    if self.prev:
      node.prev = self.prev
      self.prev.next = node

  def delete(self):
    self.prev.next = self.next
    self.next.prev = self.prev


class List:

  def __init__(self):
    self.start = None

  def add(self, val):

    newNode = Node(val)

    if not self.start:
      self.start = newNode

    else:
      node = self.start
      
      while node.next:
        node = node.next
      
      node.next = newNode
  
  def remove(self, val):

    if self.start.val == val:
      self.start = self.start.next;
    
    else:
      
      node = self.start

      while node.next:
        node = node.next

        if node.val == val:
          node.delete()
          break
      
      
  def __str__(self):
    
    node = self.start

    list = []
    while True:
      list.append(node.val)
      if not node.next:
        break
      
      node = node.next
    
    return list

  

list = List()

list.add(2)
list.add(3)
list.add(4)
list.remove(3)


print list.start.next.val
