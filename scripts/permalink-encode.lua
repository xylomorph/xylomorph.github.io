local function url_encode(value)
  return (value:gsub("([^%w%-_%.~])", function(char)
    return string.format("%%%02X", string.byte(char))
  end))
end

function Meta(meta)
  local permalink = meta.permalink
  if not permalink then
    return meta
  end

  local permalink_str = pandoc.utils.stringify(permalink)
  if permalink_str == "" then
    return meta
  end

  local encoded_permalink = url_encode(permalink_str)
  if not meta["encoded-permalink"] then
    meta["encoded-permalink"] = pandoc.MetaString(encoded_permalink)
  end

  if not meta.encoded_permalink then
    meta.encoded_permalink = pandoc.MetaString(encoded_permalink)
  end

  return meta
end
